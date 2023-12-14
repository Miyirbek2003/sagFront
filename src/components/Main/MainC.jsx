import catimg from "../../assets/gilem.png";
import postel from "../../assets/postel.png";
import gazon from "../../assets/gazon.png";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../../store/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export default function MainC() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCategory());
  }, []);
  const { category } = useSelector((state) => state.catSlice);
  return (
    <main>
      <div className="container">
        <div className="inner">
          <h1 className="title">Наш каталог</h1>
          <div className="cards">
            {category?.data?.map((item) => (
              <div
                key={item.id}
                className="card-item"
                onClick={() => navigate(`/category/${item.slug}`)}
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
