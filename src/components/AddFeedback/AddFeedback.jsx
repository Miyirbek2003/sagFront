import React from "react";
import avatar from "../../assets/avatar.png";
import bad from "../../assets/bad.svg";
import norm from "../../assets/norm.svg";
import good from "../../assets/good.svg";
import awesome from "../../assets/awesome.svg";
import { FaAngleDown } from "react-icons/fa";
export default function AddFeedback() {
  const [selected, setSelected] = React.useState("");
  const [opened, setOpened] = React.useState(false);

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
  return (
    <main className="addfeed">
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
            {selected.length == 0 ? (
              "Выберите сотрудика"
            ) : (
              <span className="selected">
                {" "}
                <img src={avatar} alt="" /> {selected}
              </span>
            )}
            <span className="angle">
              <FaAngleDown fontSize={20} />
            </span>
            <div className="drop-item">
              <div
                className="item-item"
                onClick={() => {
                  setSelected(`Zarina Yo’ldasheva`);
                }}
              >
                <img src={avatar} alt="" />
                Zarina Yo’ldasheva
              </div>
              <div
                className="item-item"
                onClick={() => {
                  setSelected(`Guli Xolmetova`);
                }}
              >
                <img src={avatar} alt="" />
                Guli Xolmetova
              </div>
              <div
                className="item-item"
                onClick={() => {
                  setSelected(`Bobur Agzamov`);
                }}
              >
                <img src={avatar} alt="" />
                Bobur Agzamov
              </div>
            </div>
          </div>

          <div className="choosen">
            <div className="title">Оцените нас</div>
            <div>
              <button className="choose">
                <img src={bad} alt="" />
              </button>
              <button className="choose">
                <img src={good} alt="" />
              </button>
              <button className="choose">
                <img src={norm} alt="" />
              </button>
              <button className="choose">
                <img src={awesome} alt="" />
              </button>
            </div>
          </div>
          <textarea
            className="textarea1"
            placeholder="Ваше сообщение"
          ></textarea>
          <button className="submt">Отправить</button>
        </div>
      </div>
    </main>
  );
}
