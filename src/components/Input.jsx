import React from 'react'

const Input = ({ id, label, type, required }) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} required={required} />
    </div>
  )
}

export default Input
