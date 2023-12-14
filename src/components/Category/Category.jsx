import isfaxan from "../../assets/isfaxan.png";
import tumari from "../../assets/tumari.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { getSubCategory } from "../../store/CategorySlice";
export default function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getSubCategory(id));
    window.scrollTo(0, 0);
  }, []);
  const { subCategory } = useSelector((state) => state.catSlice);
  return (
    <main>
      <div className="container">
        <div className="inner">
          <h1 className="title">Наш подкаталог</h1>
          <div className="cards">
            {subCategory?.data?.map((item) => (
              <div
                key={item.id}
                className="card-item"
                onClick={() =>
                  navigate(`/category/${id}/${item.id}/${item.slug}`)
                }
              >
                <img
                  src={`https://sag-admin.webclub.uz/${item.image}`}
                  alt=""
                  loading="lazy"
                />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
