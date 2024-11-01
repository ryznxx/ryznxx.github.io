import React from "react";
import "./Dynamicisland.scss";
import { useNavigate } from "react-router-dom";

const Dynamicisland = () => {
  const location = useNavigate();
  return (
    <nav>
      <div className="navigation-wrapper">
        <ul>
          <li onClick={() => location("/")}>Project</li>
          <li onClick={() => location("/")}>Skill</li>
        </ul>
      </div>
    </nav>
  );
};

export default Dynamicisland;
