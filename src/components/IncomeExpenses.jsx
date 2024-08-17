import React,{ useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

const incomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  let {income, expense} = amounts.reduce((acc, number) => {
    if(number > 0){
      acc.income += number;
    }
    else if (number < 0){
      acc.expense += Math.abs(number);
    }
    return acc;
  },{income:0, expense:0})

  income = income.toFixed(2);
  expense = expense.toFixed(2);

  return (
    <div className='my-3 bg-white py-3 flex border-b-2 border-b-black border-opacity-30'>
      <div className='flex-1 text-center'>
        <h1 className='font-bold'>INCOME</h1>
        <h1 className='text-green-400 font-semibold'>+₹{income}</h1>
      </div>
      <div className='border-r-2'></div>
      <div className='flex-1 text-center'>
        <h1 className='font-bold'>EXPENSE</h1>
        <h1 className='text-red-400 font-semibold'>-₹{expense}</h1>
      </div>
    </div>
  )
}

export default incomeExpenses