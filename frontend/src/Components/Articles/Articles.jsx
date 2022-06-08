import Article from "../Article/Article";

const Articles = () => {
  const articles = [
    {
      name: "Fiets",
      school: "Het Klavertje",
      img_url: "https://picsum.photos/200/300",
      description: "Een fiets voor meisjes van 5-7jaar",
    },
    {
      name: "Skateboard",
      school: "De Luchtballon",
      img_url: "https://picsum.photos/200/300",
      description: "Skateboard voor kinderen van de lagere school",
    },
    {
      name: "Skateboard",
      school: "De Luchtballon",
      img_url: "https://picsum.photos/200/300",
      description: "Skateboard voor kinderen van de lagere school",
    },
    {
      name: "Skateboard",
      school: "De Luchtballon",
      img_url: "https://picsum.photos/200/300",
      description: "Skateboard voor kinderen van de lagere school",
    },
    {
      name: "Skateboard",
      school: "De Luchtballon",
      img_url: "https://picsum.photos/200/300",
      description: "Skateboard voor kinderen van de lagere school",
    },
  ];
  return (
    <div className="articles">
      <h2 className="articles__title">
        Er zijn {articles.length} artikelen gevonden
      </h2>
      <div className="articles__grid">
        {articles && articles.map((article) => <Article details={article} />)}
      </div>
    </div>
  );
};

export default Articles;
