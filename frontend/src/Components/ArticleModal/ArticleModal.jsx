import Modal from "react-modal";

const ArticleModal = ({ modalOpen, setModalOpen, details }) => {
  Modal.setAppElement("#root");
  const { name, school, img_url, description } = details;

  function afterOpenModal() {}

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Modal
      isOpen={modalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="ArticleModal"
      className="articleModal"
      overlayClassName="Overlay"
    >
      <div className="articleModal__header">
        <h3 className="articleModal__header__title">{name}</h3>
        <button
          className="articleModal__header__close"
          onClick={closeModal}
        ></button>
      </div>
      <div className="articleModal__body">
        <div className="articleModal__body__left">
          <img src={img_url} alt={`foto voor ${name}`} />
        </div>
        <div className="articleModal__body__right">
          <p className="articleModal__body__right__description">
            {description}
          </p>
          <div className="articleModal__body__right__bottom">
            <p className="articleModal__body__right__bottom__school">
              Eigendom van {school}
            </p>
            <form
              className="articleModal__body__right__bottom__submit"
              onSubmit={(e) => e.preventDefault()}
            >
              <button className="articleModal__body__right__bottom__submit__button">
                Uitlenen
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ArticleModal;
