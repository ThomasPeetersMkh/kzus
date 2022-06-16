import Article from "../Article/Article";
import { useGetAllProductsQuery } from "../../data/productApi";

const Articles = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className="articles">
      <h2 className="articles__title">
        Er zijn {data["hydra:totalItems"]} artikelen gevonden
      </h2>
      <div className="articles__grid">
        {data &&
          data["hydra:member"].map((product) => {
            return <Article key={product["@id"]} details={product} />;
          })}
      </div>
    </div>
  );
};

export default Articles;
