import React, { useState } from "react";
import "./experienceCard.scss";
import ChevronRight from "../../icons/ChevronRight";
import ExperienceDrawer from "./ExperienceDrawer";
import Spacer from "../../common/Spacer";

export default function ExperienceCard({
  company,
  positions,
  subPositions,
  description,
  drawer,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="experience-card">
        <div className="arrow-container">
          <h4 className="company">{company}</h4>
        </div>
        <Spacer height="8px" />
        {positions.map(({ title, date, key }) => {
          return (
            <>
              <div key={key} className="positions">
                <span className="title">{title}</span>

                {date && <span className="date">{date}</span>}
              </div>
              <Spacer height={8} />
            </>
          );
        })}
        {subPositions?.map(({ title, date, key }) => {
          return (
            <>
              <div key={key} className="sub-positions">
                <span className="title">{title}</span>
                {date && <span className="date">{date}</span>}
              </div>
              <Spacer height={8} />
            </>
          );
        })}
        <p className="description">{description}</p>
        {drawer && drawer.bullets.length !== 0 && (
          <button
            className="more-details"
            onClick={() => setIsDrawerOpen(true)}
          >
            More details
          </button>
        )}
      </div>

      {drawer && (
        <ExperienceDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          {...drawer}
        />
      )}
    </>
  );
}
