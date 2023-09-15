import { useState } from "react";
import "./NewExpenseForm.css" ;

const ExpenseForm = () => {
const [ enteredTitle , setTitle ] = useState('')
    const [ enteredAmount , setAmount ] = useState('')
        const [ enteredDate , setDate ] = useState('')


// const [ enteredDate , setDate] = useState("")
// const [ enteredAmount  , settitleAmount ] = useState("")
const amountChangeHandler = (event) =>{
    setAmount(event.target.value)
}
const titleChangeHandler = (event) =>{
    setTitle(event.target.value)
}
const dateChangeHandler = (event) =>{
     setDate(event.target.value)
}
// another way of using only one function for all onclick events 
// const inputHandler = (identifier , value) =>{
//     if(identifier === "title"){
//         setTitle(value)
//     }else if( identifier === "date") {
//       setDate(value)
//     }else {
//     setAmount(value)
// }
// }
const submitHandler = (event) =>{
    event.preventDefault();
   const expenseData = {
    title: enteredTitle,
    amount:enteredAmount,
    date : new Date(enteredDate)
   };
//    console.log(expenseData);
};
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control"> 
             <label>{enteredTitle}</label>
             <input type="text" onChange={titleChangeHandler} />
             {/* Below the input handler function only called when the onchange event occurs  */}
             {/* <input type="text" onChange={(event)=> inputHandler('title', event.target.value)} /> */}

            </div>
            <div className="new-expense__control"> 
             <label>{enteredAmount}</label>
             <input type="number" min='0.1' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control"> 
             <label>{enteredDate}</label>
             <input type="date" min='30-08-2022' max='30-12-2023' onChange={dateChangeHandler}/>
            </div>
        </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
        </div>
    </form>)
}


export default ExpenseForm ;
