import React from "react";
import "./Filter.css"

const Filter = ({filterFunction, type}) => {
  return (
    <input className ="input"
    placeholder = {`Search by ${type}`}
    onChange = {e => {
      filterFunction(e.target.value.toLowerCase().trim())
    }}
    />

  )
}

export default Filter;