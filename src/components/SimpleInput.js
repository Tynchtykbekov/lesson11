

import React, {useState, useEffect} from 'react'


const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [nemaIsValid, setNameIsValid] = useState(true)
// const [formIsValid, setFormIsValid] = useState(false)
// useEffect(() => {
// if (enteredName.trim() !== '') {
//   setFormIsValid(true)
// }else {
//   setFormIsValid(false)
// }
// }, [enteredName])
let formIsValid = false
if (enteredName.trim() !== '') {
  formIsValid = true
}else{
  formIsValid = false
}
const nameInputChangeHandler = (e) => {
  setEnteredName(e.target.value)
 

 if (e.target.value.trim() !== '') {
  setNameIsValid(true)
 } else {
  setNameIsValid(false)
 }
} 
const nameBlurHandler = () => {
  // if(enteredName.trim() ===''){
  //   setNameIsValid(false)
  // }else {
  //   setNameIsValid(true)
  //   return
  // }
}

const formSubmitHandler = (e) => {
 

  e.prevenDefault()
 
  if (enteredName.trim() !== '') {
    setNameIsValid(true)

  }else {
    setNameIsValid(false)
    return 
  }
 

}
const inputNameClasses = !nemaIsValid ? 'form-control  invalid' : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange={nameInputChangeHandler}  onBlur={nameBlurHandler}/>
      {!nemaIsValid && <p>Most not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
