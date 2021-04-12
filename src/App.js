
import { useEffect, useState } from 'react';
import Student from "./components/Student"
import Filter from "./components/Filter"
import './App.css';

function App() {
const [info, setInfo] = useState([])
const [filterStudent, setFilterStudent] = useState([])

useEffect(() => {
  getStudents()
}, [])


const filterName = str => {
  let newFilter = [];
  info.map(student => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    if(fullName.includes(str)) {
      newFilter.push(student)
    }
  })
  setFilterStudent(newFilter)
}

const getStudents = async () => {
  const response = await fetch(
    `https://www.hatchways.io/api/assessment/students`
  );
  const data = await response.json();
  console.log(data)
  setInfo(data.students)
  setFilterStudent(data.students)
}

return (
  <div className="App">
    <div className= "contentContainer">
      <Filter filterFunction = {filterName} type ={`name`} 
      />
      {filterStudent.map(stud => {
    function findAverage(array) {
      let sum = 0;
      for(let i =0; i < array.length; i++) {
        sum += parseInt(array[i])
      }
      let average = sum/array.length;
      return average;
    }
    const averageGrade = findAverage(stud.grades)
    return (
    <Student 
    key = {stud.id}
    image = {stud.pic}
    Email = {stud.email}
    FirstName = {stud.firstName}
    LastName = {stud.lastName}
    Skill = {stud.skill}
    Company = {stud.company}
    Average = {averageGrade}
    />
  );
})}
</div>
</div>
);
}

export default App;
