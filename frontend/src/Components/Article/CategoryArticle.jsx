import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../data/categoryApi";
import Article from "./Article";
const CategoryArticle = () => {
  const { name } = useParams();
  const call = name.split("-").join(" ");
  console.log(call);
  const categories = {
    speelgoed: 1,
    kledij: 2,
    kleuters: 3,
    "lagere school": 4,
    verkleding: 5,
    allerlei: 6
  };
  console.log(categories[call]);

  const { data, isError, isLoading } = useGetCategoryByIdQuery(
    categories[call]
  );
  console.log(data);

  return (
    <div className="articles">
      <h2 className="articles__title">
        Er zijn{" "}
        {data &&
        data.products.filter((prod) => prod.status === "Beschikbaar").length > 0
          ? data.products.filter((prod) => prod.status === "Beschikbaar").length
          : "0"}{" "}
        gevonden voor {data && data.name}
      </h2>
      <div className="articles__grid">
        {data &&
          data.products
            .filter((prod) => prod.status === "Beschikbaar")
            .map((prod) => {
              return <Article key={prod.id} details={prod} />;
            })}
      </div>
    </div>
  );
};

export default CategoryArticle;
