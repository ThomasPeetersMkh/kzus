import Announcement from "../Announcement/Announcement";

const Landing = () => {
  const announcements = [
    {
      title: "Oudercontact",
      message:
        "Dit jaar is er weer een oudercontact gepland, voorzien van de corona maatregelen",
    },
    {
      title: "Sportdag",
      message:
        "Dit jaar is er weer een sportdag gepland, voorzien van de corona maatregelen",
    },
  ];

  return (
    <>
      <div className="landing">
        <div className="landing__recent">
          <h2 className="landing__recent__title">meest recente artikelen</h2>
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
