import React from "react";
import avatar from "../../assets/avatar.png";
import bad from "../../assets/bad.svg";
import norm from "../../assets/norm.svg";
import good from "../../assets/good.svg";
import awesome from "../../assets/awesome.svg";
import { FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getEmployer } from "../../store/CategorySlice";
import axios from "axios";
import Succes from "../Succes/Succes";
export default function AddFeedback() {
  const [selected_name, setSelected_name] = React.useState("");
  const [selected_img, setSelected_img] = React.useState("");
  const [selected_id, setSelected_id] = React.useState(null);
  const [rating, setRating] = React.useState(null);
  const [coment, setComent] = React.useState("");
  const [opened, setOpened] = React.useState(false);
  const [formS, setFormS] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  var choose = document.querySelectorAll(".choose");
  choose.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      choose.forEach((btns) => {
        btns.classList.remove("active");
      });
      btn.classList.add("active");
      return btn;
    });
  });
  async function onSent(e) {
    e.preventDefault();
    if (rating && coment && selected_id) {
      setIsLoading(true);
      const response = await axios.post(
        "https://sag-admin.webclub.uz/api/rating",
        {
          employee_id: selected_id,
          rating: rating,
          comment: coment,
        }
      );

      if (response.status == 200) {
        setIsLoading(false);
        setFormS(true);
        setComent("");
        setRating(null);
        setSelected_name("");
        setSelected_img("");
        setSelected_id(null);
        const select = document.querySelectorAll(".choose");
        select.forEach((item) => {
          item.classList.remove("active");
        });
      } else {
        setIsLoading(false);
        setFormS(true);
        setComent("");
        setRating(null);
        setSelected_name("");
        setSelected_img("");
        setSelected_id(null);
        const select = document.querySelectorAll(".choose");
        select.forEach((item) => {
          item.classList.remove("active");
        });
      }
    }
  }
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getEmployer());
  }, []);
  const { employer } = useSelector((state) => state.catSlice);

  return (
    <main className="addfeed">
      {formS && <Succes formS={formS} setFormS={setFormS} />}
      <div className="container">
        <div style={{ textAlign: "center" }} className="title feed">
          Оцените нас !
        </div>
        <div className="inner">
          <div
            className="drop-dawn"
            onClick={() => {
              const angle = document.querySelector(".angle");
              const drop = document.querySelector(".drop-item");
              angle.classList.toggle("rotated");
              setOpened(!opened);
              if (!opened) {
                drop.classList.add("show");
              } else {
                drop.classList.remove("show");
              }
            }}
          >
            {selected_name == 0 ? (
              "Выберите сотрудика"
            ) : (
              <span className="selected">
                {" "}
                <img src={selected_img} alt="" /> {selected_name}
              </span>
            )}
            <span className="angle">
              <FaAngleDown fontSize={20} />
            </span>
            <div className="drop-item">
              {employer?.data?.map((item) => (
                <div
                  key={item.id}
                  className="item-item"
                  onClick={() => {
                    setSelected_name(item.full_name);
                    setSelected_img(item.img_url);
                    setSelected_id(item.id);
                  }}
                >
                  <img src={item.img_url} alt="" loading="lazy" />
                  {item.full_name}
                </div>
              ))}
            </div>
          </div>

          <div className="choosen">
            <div className="title">Оцените нас</div>
            <div>
              <span>
                <button className="choose" onClick={() => setRating(1)}>
                  <img src={bad} alt="" />
                </button>
                Плохо
              </span>
              <span>
                <button className="choose" onClick={() => setRating(2)}>
                  <img src={good} alt="" />
                </button>
                Не понравилось
              </span>
              <span>
                <button className="choose" onClick={() => setRating(3)}>
                  <img src={norm} alt="" />
                </button>
                Хорошо
              </span>
              <span>
                <button className="choose" onClick={() => setRating(4)}>
                  <img src={awesome} alt="" />
                </button>
                Отлично
              </span>
            </div>
          </div>
          <textarea
            className="textarea1"
            placeholder="Ваше сообщение"
            onChange={(e) => setComent(e.target.value)}
            value={coment}
          ></textarea>
          <form onSubmit={onSent}>
            <button disabled={isLoading} className="submt">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
