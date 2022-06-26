import { useParams } from "react-router-dom";
import { useGetSchoolByIdQuery } from "../../data/schoolApi";
import SchoolArticle from "./SchoolArticle";

const SpecificSchool = () => {
  const { name } = useParams();
  const call = name.split("-").join(" ");
  const schools = {
    "vbs de wegwijzer": 1,
    "de knipoog": 2,
    "de wijngaard": 3,
    "de luchtballon": 4
  };
  const { data, isError, isLoading } = useGetSchoolByIdQuery(schools[call]);
  console.log(data);
  return (
    <>
      <div className="schools">
        <div className="schools__grid">
          <h2 className="schools__grid__school">
            Resultaten voor {data && data.name}
          </h2>
          <div className="schools__grid__grid">
            {data &&
              data.products
                .filter((prod) => prod.status === "Beschikbaar")
                .map((prod) => {
                  const full = { ...prod, school: { name: data.name } };
                  return <SchoolArticle key={prod.id} details={{ full }} />;
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificSchool;
