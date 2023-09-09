import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {


    const [title , setTitle] = useState(props.title)
   console.log("state updated")
    const clickHandler = () =>{
       setTitle('Updated!');
       console.log("stste render")
    }

    
    return ( 
        <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}> Click here</button>
        </Card>
    )
}

export default ExpenseItem;