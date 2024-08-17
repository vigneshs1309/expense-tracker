import React, {useContext, useEffect} from 'react'
import TransactionItem from './TransactionItem'
import { GlobalContext } from '../context/GlobalState'


const Transaction = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  // useEffect(() => {
  //   getTransactions();
  // },[])


  return (
    <div className='my-6'>
      <h1 className='font-bold text-lg'>History</h1>
      <div className='border-b-2 border-b-black opacity-30'></div>
      <ul className='grid grid-flow-row gap-4 py-3'>
        {transactions.map(transaction => (
          <TransactionItem key = {transaction.id} transaction={transaction}/>
        ))}
      
      </ul>
    </div>
  )
}

export default Transaction