import React from "react";
import "./style.css";



export function Card({ props }) {

  return (
    <div className="card">
      <div className="img-container">
        <img className="thumbnail" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
          <li>
            <strong>Summary:</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
