import isfaxan from "../../assets/is_item.png";
import avatar from "../../assets/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../store/CategorySlice";
import React from "react";

export default function Feedback() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getReviews());
  }, []);
  const { reviews } = useSelector((state) => state.catSlice);
  return (
    <main className="feedback-main">
      <div className="container">
        <div className="inner">
          <div className="title feed">Наши клиенты</div>
          <div className="feedbacks">
            {reviews?.data?.map((item) => (
              <div className="feed-item" key={item.id}>
                <img src={item.img_url} alt="" />
                <div>
                  <div className="feed-user">
                    <img src={avatar} alt="" />
                    <div className="user-name">
                      <h4>{item.full_name} </h4>
                      <p>{item.address}</p>
                    </div>
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </main>
  );
}
