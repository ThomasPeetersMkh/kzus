import { useState } from "react";
import ArticleModal from "../ArticleModal/ArticleModal";

const Article = ({ details }) => {
  const { name, school, img_url, description } = details;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="article">
      <h3 className="article__title">
        {name} - {school}
      </h3>
      <div className="article__body">
        <div className="article__body__image">
          <img src={img_url} alt={`foto voor ${name}`} />
        </div>
        <div className="article__body__right">
          <div className="article__body__right__descontainer">
            <p className="article__body__right__descontainer__description">
              {description}
            </p>
          </div>
          <button
            className="article__body__right__button"
            onClick={() => setModalOpen(true)}
          >
            Bekijk details
          </button>
        </div>
        {modalOpen && (
          <ArticleModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            details={details}
          />
        )}
      </div>
    </div>
  );
};

export default Article;
