import Announcement from "../Announcement/Announcement";
import Article from "../Article/Article";
import { useGetAllProductsQuery } from "../../data/productApi";

const Landing = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 1000
  });
  const announcements = [
    {
      title: "Oudercontact",
      message:
        "Dit jaar is er weer een oudercontact gepland, voorzien van de corona maatregelen"
    },
    {
      title: "Sportdag",
      message:
        "Dit jaar is er weer een sportdag gepland, voorzien van de corona maatregelen"
    }
  ];

  return (
    <>
      <div className="landing">
        <div className="landing__recent">
          <h2 className="landing__recent__title">meest recente artikelen</h2>
          <div className="landing__recent__grid">
            {data &&
              data["hydra:member"].map((product, i) => {
                if (i > 2) {
                  return null;
                }
                return <Article key={product.id} details={product} />;
              })}
          </div>
        </div>
        <div className="landing__mededelingen">
          {announcements &&
            announcements.map((announcement) => (
              <Announcement details={announcement} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
