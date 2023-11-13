import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(item => item.amount);
  const total = amounts.reduce((item, acc) => acc += item).toFixed(2)


  return (
    <div>
      <h4>Your Balance: </h4>
      <h1 >${total}</h1>
    </div>
  )
}
