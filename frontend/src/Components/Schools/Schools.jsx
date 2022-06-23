import { useGetAllSchoolsQuery } from "../../data/schoolApi";
import SingleSchool from "./SingleSchool";

const Schools = () => {
  const { data, isError, isLoading } = useGetAllSchoolsQuery();
  console.log(data);
  return (
    <div className="schools">
      <div className="schools__grid">
        {data &&
          data["hydra:member"].map((product) => {
            return <SingleSchool key={product.id} details={product} />;
          })}
      </div>
    </div>
  );
};

export default Schools;
