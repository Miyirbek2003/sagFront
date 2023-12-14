import React from "react";
import reactSelect from "react-select";
import axios from "axios";
import Succes from "../Succes/Succes";

export default function Modal({
  isModal,
  setIsModal,
  product_id,
  setFormS,
  formS,
}) {
  if (!isModal) {
    return null;
  }

  function onSent(e) {
    e.preventDefault();
    var formRes = {
      full_name: full_name,
      phone: phone,
      product_id: product_id,
    };
    if (full_name && phone && phone.length == 9 && product_id) {
      formSent(formRes, setIsModal, setFormS, formS);
    } else {
      if (!full_name) {
        const name = document.querySelector(".name");
        name.style.display = "block";
      }

      if (!phone || phone.length != 9) {
        const name = document.querySelector(".phone");
        name.style.display = "block";
      }
    }
  }
  async function formSent(res, setIsModal, setFormS, formS) {
    const response = await axios.post(
      `https://sag-admin.webclub.uz/api/interesting`,
      {
        product_id: res.product_id,
        full_name: res.full_name,
        phone: res.phone,
      }
    );

    if (response.status == 200) {
      setIsModal(false);
      setFormS(true);
    }
  }

  const [full_name, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  return (
    <div className="modal-main">
      <div className="modal">
        <div className="modal-content">
          <span className="quit" onClick={() => setIsModal(false)}>
            &times;
          </span>
          <h3>Купить</h3>
          <form onSubmit={onSent}>
            <div>
              <input
                type="text"
                placeholder="Имя"
                name="name"
                autoComplete="off"
                value={full_name}
                onChange={(e) => {
                  setFullName(e.target.value);
                  const name = document.querySelector(".name");
                  name.style.display = "none";
                }}
              />
              <span className="error name">Пополините поля</span>
            </div>
            <div>
              <input
                type="number"
                placeholder="Телефон номер"
                name="phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  const name = document.querySelector(".phone");
                  name.style.display = "none";
                }}
              />
              <span className="error phone">Количества чисел:9 </span>
            </div>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
