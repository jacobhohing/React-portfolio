import React from "react";

function ProjCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>GitHub Link:</strong> {props.gitHub}
          </li>
          <li>
            <strong>Web Link:</strong> {props.web}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjCard;
