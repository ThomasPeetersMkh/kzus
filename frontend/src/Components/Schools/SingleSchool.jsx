import React from "react";
import { useState } from "react";
import SchoolArticle from "./SchoolArticle";

const SingleSchool = ({ details }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { name, products } = details;
  return (
    <>
      <h2
        className="schools__grid__school"
        onClick={() => setIsHidden((isHidden) => !isHidden)}
      >
        {name}
      </h2>
      <div
        className={
          isHidden ? "schools__grid__grid__hidden" : "schools__grid__grid"
        }
      >
        {products &&
          products
            .filter((prod) => prod.status === "Beschikbaar")
            .map((prod) => {
              console.log(prod);
              const full = { ...prod, school: { name: name } };
              return <SchoolArticle key={prod.id} details={{ full }} />;
            })}
      </div>
    </>
  );
};

export default SingleSchool;
