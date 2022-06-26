import { useGetUserByIdQuery } from "../../data/userApi";
import UsedArticle from "./UsedArticle";

const UserArticle = () => {
  const { data, isError, isLoading } = useGetUserByIdQuery(1, {
    pollingInterval: 1000
  });
  console.log(data);
  return (
    <div>
      <div className="articles">
        <div className="articles__grid">
          {data &&
            data.products.map((prod) => {
              return <UsedArticle key={prod.id} details={prod} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default UserArticle;
