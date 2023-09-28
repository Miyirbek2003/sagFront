import is_item from "../../assets/is_item.png";
import { useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Items() {
  const { items } = useParams();
  const [isModal, setIsModal] = React.useState(false);
  if (isModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const ratingChanged = (newRating) => {
    return null;
  };
  
  return (
    <main>
      {isModal && <Modal  isModal={isModal} setIsModal={setIsModal} />}
      <div className="container">
        <div className="inner">
          <h1 className="title">
            <span style={{ textTransform: "capitalize" }}>{items}</span> gilam
            turlari
          </h1>
          <div className="cat-cards">
            <div className="cat-item">
              <span className="status">Yangi</span>
              <div className="imgs">
                <img src={is_item} alt="" />
              </div>
              <div className="desc">
                <div className="top">
                  <h4>
                    {" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {items}
                    </span>{" "}
                    gilam turlari
                  </h4>
                  <span>1 298 000 so'm</span>
                </div>
                <div className="middle">
                  ID / HN12345{" "}
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <button onClick={() => setIsModal(true)}>Xarid qilish</button>
            </div>
            <div className="cat-item">
              <span className="status">Yangi</span>
              <div className="imgs">
                <img src={is_item} alt="" />
              </div>
              <div className="desc">
                <div className="top">
                  <h4>
                    {" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {items}
                    </span>{" "}
                    gilam turlari
                  </h4>
                  <span>1 298 000 so'm</span>
                </div>
                <div className="middle">
                  ID / HN12345{" "}
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <button onClick={() => setIsModal(true)}>Xarid qilish</button>
            </div>
            <div className="cat-item">
              <span className="status">Yangi</span>
              <div className="imgs">
                <img src={is_item} alt="" />
              </div>
              <div className="desc">
                <div className="top">
                  <h4>
                    {" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {items}
                    </span>{" "}
                    gilam turlari
                  </h4>
                  <span>1 298 000 so'm</span>
                </div>
                <div className="middle">
                  ID / HN12345
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />{" "}
                </div>
              </div>
              <button onClick={() => setIsModal(true)}>Xarid qilish</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
