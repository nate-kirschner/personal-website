import profilePic from "../images/profile-pic.jpg";

const ProfilePic = ({ className }) => {
  return (
    <div className={className}>
      <div
        style={{
          width: "40px",
          height: "40px",
          overflow: "hidden",
          borderRadius: "50%",
          boxShadow: "0 0 0 2px #1b2444",
        }}
      >
        <img
          style={{
            width: "40px",
            top: "4px",
          }}
          src={profilePic}
          alt="Profile"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
