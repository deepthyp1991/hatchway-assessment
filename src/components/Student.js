import React, { useState } from 'react';
import OpenIcon from "./OpenIcon";
import CloseIcon from "./CloseIcon"
import "./Student.css";

const Student = ({image, FirstName, LastName, Skill, Company, Email, Grades, Average}) => {
const [showGrades, setShowGrades] = useState(false)

  return (
    <div className = "container">
      <img className = "avatar" src={image} alt=""/>
      <h1 className = "name">{`${FirstName.toUpperCase()} ${LastName.toUpperCase()}`}</h1>
      <div className = "content"> 
      <p>Email: {Email}</p>
      <p>Skill: {Skill}</p>
      <p>Comapny: {Company}</p>
      <p>Avg: {Average}%</p>
      {showGrades && (
          <div className="extendedContent">
            {Grades.map((grade, index) => {
              return (
                <div key={index.toString()}>
                  {`Test${index}:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                </div>
              );
            })}
            </div>
      )}
      </div>
      {showGrades ? (
        <CloseIcon
          className="expandBtn"
          setShowGrades={setShowGrades}
          showGrades={showGrades}
        />
      ) : (
        <OpenIcon
          className="expandBtn"
          setShowGrades={setShowGrades}
          showGrades={showGrades}
        />
      )}
    </div>
  )
}

export default Student