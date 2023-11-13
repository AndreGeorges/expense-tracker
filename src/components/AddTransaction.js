import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)


    const onSubmit = (e) => {
        e.preventDefault();

       const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: parseFloat(amount)
       }

       return addTransaction(newTransaction)
    }

    return (
        <div>
            <h1>Add new transaction</h1>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='enter text...' />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">amount<br />(negative-expense, positive-income)</label>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='enter amount' />
                </div>
                <button className="btn">Add transaction</button>
            </form>

        </div>
    )
}
