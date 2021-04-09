
import { useEffect, useState } from 'react';
import Student from "./components/Student"
import './App.css';

function App() {
const [info, setInfo] = useState([])

useEffect(() => {
  getStudents()
}, [])

const getStudents = async () => {
  const response = await fetch(
    `https://www.hatchways.io/api/assessment/students`
  );
  const data = await response.json();
  console.log(data)
  setInfo(data.students)

}
return (
  <div className="App">
    <div className= "contentContainer">
    <form>
    <input className ="serach-bar" type="text"/>
    <button className= "search-button" type="submit">
      serach
    </button>
  </form>
  {info.map(stud => {
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
