import Article from "../Article/Article";
import { useGetAllProductsQuery } from "../../data/productApi";

const Articles = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 1000
  });
  return (
    <div className="articles">
      {!isError && isLoading && (
        <h2 className="articles__title">Data is aan het laden</h2>
      )}
      {isError && !isLoading && (
        <h2 className="articles__title">Er is iets mis gegaan...</h2>
      )}
      {!isError && !isLoading && (
        <h2 className="articles__title">
          Er zijn{" "}
          {data &&
            data["hydra:member"].filter((prod) => prod.status === "Beschikbaar")
              .length}{" "}
          artikelen gevonden
        </h2>
      )}
      <div className="articles__grid">
        {data &&
          data["hydra:member"]
            .filter((prod) => prod.status === "Beschikbaar")
            .map((product) => {
              return <Article key={product.id} details={product} />;
            })}
      </div>
    </div>
  );
};

export default Articles;
