export default function Modal({ isModal, setIsModal }) {
  if (!isModal) {
    return null;
  }
  function onSent(e) {
    e.preventDefault();
  }
  return (
    <div className="modal-main">
      <div className="modal">
        <div className="modal-content">
          <span className="quit" onClick={() => setIsModal(false)}>
            &times;
          </span>
          <h3>Купить</h3>
          <form onSubmit={onSent}>
            <input
              type="text"
              placeholder="Имя"
              name="name"
              autoComplete="false"
            />
            <input
              type="text"
              placeholder="Телефон номер"
              name="phone"
              autoComplete="false"
            />
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
