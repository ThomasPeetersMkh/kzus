import { useState } from "react";
import ArticleModal from "../ArticleModal/ArticleModal";

const SchoolArticle = ({ details: { full } }) => {
  const {
    name,
    school: { name: schoolName },
    imgPath,
    description,
  } = full;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="school">
      <h3 className="school__title">
        {name} - {schoolName}
      </h3>
      <div className="school__body">
        <div className="school__body__image">
          <img
            src={"https://picsum.photos/200/300"}
            alt={`foto voor ${name}`}
          />
        </div>
        <div className="school__body__right">
          <div className="school__body__right__descontainer">
            <p className="school__body__right__descontainer__description">
              {description}
            </p>
          </div>
          <button
            className="school__body__right__button"
            onClick={() => setModalOpen(true)}
          >
            Bekijk details
          </button>
        </div>
        {modalOpen && (
          <ArticleModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            details={full}
          />
        )}
      </div>
    </div>
  );
};

export default SchoolArticle;
