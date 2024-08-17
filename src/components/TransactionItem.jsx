import React,{ useContext} from 'react'
import './CSS/TransactionItem.css'
import { GlobalContext } from '../context/GlobalState'

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={`bg-white p-2 border-b-2 border-r-4 flex font-semibold cursor-pointer border-b-gray-400 ${sign === '-' ? 'border-r-red-400':'border-r-green-400' } list-li`}>
      {transaction.text} 
      <span className='ml-auto'>{sign}₹{Math.abs(transaction.amount)}</span>
      <button className='translate-x-[-512px] bg-red-500 px-1 text-white list-btn'
      onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default TransactionItem