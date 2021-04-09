import React from 'react';

const Student = ({image, FirstName, Skill, Company, Email, Average}) => {

  return (
    <div>
      <img src={image} alt=""/>
      <h4>{FirstName}</h4>
      <p>Email: {Email}</p>
      <p>Skill: {Skill}</p>
      <p>Comapny: {Company}</p>
      <p>Avg: {Average}</p>
    </div>
  )
}

export default Student