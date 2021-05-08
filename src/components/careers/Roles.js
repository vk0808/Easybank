import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { jobs } from "./jobs";

function Roles() {
  const [loc, setLoc] = useState("");
  const [depart, setDepart] = useState("");
  const ctry = [...new Set(jobs.map((job) => job.location))].sort();
  ctry.unshift("All locations");
  const defaultCtry = ctry[0];
  const dep = [...new Set(jobs.map((job) => job.department))].sort();
  dep.unshift("All departments");
  const defaultDep = dep[0];

  return (
    <div id="open-positions" className="roles">
      <h3 className="about-subhead">Opportunities</h3>
      <h2>Join the team — we’re hiring now</h2>
      <div className="job-role">
        <div className="job-role-left">
          <div>
            <h4 className="about-subhead ihead">Location</h4>
            <Dropdown
              options={ctry}
              onChange={(e) => setLoc(e.value)}
              value={defaultCtry}
              placeholder="Select location"
              className="capital"
            />
          </div>
          <div>
            <h4 className="about-subhead ihead">
              Department ({` ${dep.length - 1} `})
            </h4>
            <Dropdown
              options={dep}
              onChange={(e) => setDepart(e.value)}
              value={defaultDep}
              placeholder="Select department"
              className="capital"
            />
          </div>
        </div>

        <div className="job-role-right">
          <h4 className="about-subhead ihead">
            Available Roles (
            {` 
                ${
                  jobs
                    .filter((job) => job.location === loc)
                    .filter((job) => job.department === depart).length
                } `}
            )
          </h4>
          <div className="roles-container">
            {jobs
              .filter((job) => job.location === loc)
              .filter((job) => job.department === depart)
              .map((job) => {
                const { id, role, location } = job;
                return (
                  <div key={id} className="job-group">
                    <h3 className="role">{role}</h3>
                    <p className="role-location">{location}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
