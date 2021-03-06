import Modal from "react-modal";
import { usePatchProductMutation } from "../../data/productApi";

const ArticleModal = ({ modalOpen, setModalOpen, details }) => {
  const [patchProduct] = usePatchProductMutation();
  Modal.setAppElement("#root");
  const {
    id,
    name,
    school: { name: schoolName },
    imgPath,
    description
  } = details;

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
          <img
            src={`https://wdev2.be/fs_thomasp/eindwerk/system/public/uploads/photos/${imgPath}`}
            alt={`foto voor ${name}`}
          />
        </div>
        <div className="articleModal__body__right">
          <p className="articleModal__body__right__description">
            {description}
          </p>
          <div className="articleModal__body__right__bottom">
            <p className="articleModal__body__right__bottom__school">
              Eigendom van {schoolName}
            </p>
            <form
              className="articleModal__body__right__bottom__submit"
              onSubmit={async (e) => {
                e.preventDefault();
                const data = {
                  status: "Uitgeleend",
                  user: "api/users/1"
                };
                await patchProduct({
                  productId: id,
                  data
                });
              }}
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
