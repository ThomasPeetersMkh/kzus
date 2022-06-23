import React from "react";
import SchoolArticle from "./SchoolArticle";

const SingleSchool = ({ details }) => {
  console.log(details);
  const { name, products } = details;
  console.log(name);
  return (
    <>
      <h2 className="schools__grid__school">{name}</h2>
      <div className="schools__grid__grid">
        {products &&
          products.map((prod) => {
            const full = { ...prod, school: { name: name } };
            return <SchoolArticle key={prod.id} details={{ full }} />;
          })}
      </div>
    </>
  );
};

export default SingleSchool;
