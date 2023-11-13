import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((item) => item.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((item, acc) => (acc += item), 0)
    .toFixed(2)

  const expense = amounts.filter(item => item < 0).reduce((item, acc) => (acc += item), 0).toFixed(2)


  return (
    <div>
      <div className="inc-exp-container">
        <div className="">
          <h4>income</h4>
          <p className="money plus" >${income}</p>
        </div>
        <div className="">
          <h4>Expenses</h4>
          <p className="money minus" >${expense}</p>
        </div>
      </div>
    </div>
  )
}
