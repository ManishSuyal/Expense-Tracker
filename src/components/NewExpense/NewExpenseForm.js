import { useState } from "react";
import "./NewExpenseForm.css" ;

const ExpenseForm = () => {
const [ entered , setTitle ] = useState({ 
    enteredTitle : '' ,
     enteredAmount : '' ,
      enteredDate : ''
     })
// const [ enteredDate , setDate] = useState("")
// const [ enteredAmount  , settitleAmount ] = useState("")
const amountChangeHandler = (event) =>{
    setTitle((prevState)=>{
     return { ...prevState , enteredAmount: event.target.value}
    })
}
const titleChangeHandler = (event) =>{
    setTitle((prevState)=>{
        return { ...prevState , enteredTitle: event.target.value}
       })}
const dateChangeHandler = (event) =>{
    setTitle(   setTitle((prevState)=>{
        return { ...prevState , enteredAmount: event.target.value}
       }))
}
    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control"> 
             <label>{entered[0]}</label>
             <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control"> 
             <label>{entered[1]}</label>
             <input type="number" min='0.1' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control"> 
             <label>{entered[2]}</label>
             <input type="date" min='30-08-2022' max='30-12-2023' onChange={dateChangeHandler}/>
            </div>
        </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
        </div>
    </form>)
}


export default ExpenseForm ;
