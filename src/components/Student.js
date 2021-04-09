import React from 'react';
import "./Student.css";

const Student = ({image, FirstName, LastName, Skill, Company, Email, Average}) => {

  return (
    <div className = "container">
      <img className = "avatar" src={image} alt=""/>
      <h1 className = "name">{`${FirstName.toUpperCase()} ${LastName.toUpperCase()}`}</h1>
      <div className = "content"> 
      <p>Email: {Email}</p>
      <p>Skill: {Skill}</p>
      <p>Comapny: {Company}</p>
      <p>Avg: {Average}%</p>
      </div>
    </div>
  )
}

export default Student