import { usePatchProductMutation } from "../../data/productApi";

const UsedArticle = ({ details }) => {
  const {
    id,
    name,
    school: { name: schoolName },
    imgPath,
    description
  } = details;
  const [patchProduct] = usePatchProductMutation();
  return (
    <div className="article">
      <h3 className="article__title">
        {name} - {schoolName}
      </h3>
      <div className="article__body">
        <div className="article__body__image">
          <img
            src={`https://wdev2.be/fs_thomasp/eindwerk/uploads/photos/${imgPath}`}
            alt={`foto voor ${name}`}
          />
        </div>
        <div className="article__body__right">
          <div className="article__body__right__descontainer">
            <p className="article__body__right__descontainer__description">
              {description}
            </p>
          </div>
          <button
            className="article__body__right__button"
            onClick={async () => {
              const data = {
                status: "Beschikbaar",
                user: null
              };
              await patchProduct({
                productId: id,
                data
              });
            }}
          >
            Terugbrengen
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsedArticle;
