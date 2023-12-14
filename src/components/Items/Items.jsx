import is_item from "../../assets/is_item.png";
import Modal from "../Modal/Modal";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../store/CategorySlice";
import Succes from "../Succes/Succes";

export default function Items() {
  const { id, sub_id, items } = useParams();
  const [isModal, setIsModal] = React.useState(false);
  const [product_id, setProduct_id] = React.useState();
  if (isModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const ratingChanged = (newRating) => {
    return null;
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getItems({ sub_id, items }));
    window.scrollTo(0, 0);
  }, []);
  const { items: itemss } = useSelector((state) => state.catSlice);
  const [formS, setFormS] = React.useState(false);
  return (
    <main>
      {isModal && (
        <Modal
          isModal={isModal}
          product_id={product_id}
          setIsModal={setIsModal}
          formS={formS}
          setFormS={setFormS}
        />
      )}
      {formS && <Succes formS={formS} setFormS={setFormS} />}
      <div className="container">
        <div className="inner">
          <h1 className="title">
            <span style={{ textTransform: "capitalize" }}>Наши товары</span>
          </h1>
          <div className="cat-cards">
            {itemss?.data?.map((item, index) => (
              <div className="cat-item" key={item.id}>
                <span className="status">Новый</span>
                <div className="imgs">
                  <img loading="lazy" src={item.img_url} alt="" />
                </div>
                <div className="desc">
                  <div className="top">
                    <h4>
                      {" "}
                      <span style={{ textTransform: "capitalize" }}>
                        {item.sub_category.name}
                      </span>{" "}
                    </h4>
                    {index != 0 && (
                      <span>
                        {parseInt(item.price.slice(0, -3)).toLocaleString()} сум
                      </span>
                    )}
                  </div>
                  {index != 0 && (
                    <div className="middle">
                      {item.product_id}
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  )}
                </div>
                {index != 0 && (
                  <button
                    onClick={() => {
                      setIsModal(true), setProduct_id(item.id);
                    }}
                  >
                    Узнать подробнее
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
