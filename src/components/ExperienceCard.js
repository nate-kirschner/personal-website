import "../styles/experienceCard.scss";

export default function ExperienceCard({ company, positions }) {
  return (
    <div className="experience-card">
      <h4 className="company">{company}</h4>
      {positions.map(({ title, date }) => {
        return (
          <>
            <p className="title">{title}</p>
            <p className="date">{date}</p>
          </>
        );
      })}
    </div>
  );
}
