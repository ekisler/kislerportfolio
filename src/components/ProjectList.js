import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCards from "./Projects/ProjectCards";
import pre from "../Assets/pre.svg";

const ProjectList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-portfolio-seven.vercel.app/projects")
      .then((response) => {
        setProjects(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={pre} alt="Loading..." />
        </div>
      ) : (
        <div className="card-container">
          {projects.map((project) => (
            <ProjectCards key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
