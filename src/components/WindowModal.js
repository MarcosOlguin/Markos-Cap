import "./WindowModal.css";

function WindowModal({ children, isOpen, closeModal }) {
  const handleModalClick = (e) => e.stopPropagation();
  return (
    <>
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div
          className={`modal-container ${isOpen && "is-open"}`}
          onClick={handleModalClick}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default WindowModal;
