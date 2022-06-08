const Announcement = ({ details }) => {
  const { title, message } = details;
  return (
    <div className="announcement">
      <h2 className="announcement__title">{title}</h2>
      <p className="announcement__message">{message}</p>
    </div>
  );
};

export default Announcement;
