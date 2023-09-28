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
          <h3>Xarid qilish</h3>
          <form onSubmit={onSent}>
            <input
              type="text"
              placeholder="Ism"
              name="name"
              autoComplete="false"
            />
            <input
              type="text"
              placeholder="Telefon raqam"
              name="phone"
              autoComplete="false"
            />
            <button>Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
}
