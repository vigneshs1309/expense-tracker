import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount)

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='bg-white py-2 px-2 shadow-md border border-b-black'>
      <h1 className='font-semibold'>YOUR BALANCE</h1>
      <h1 className='text-2xl font-bold'>₹{total}</h1>
    </div>
  )
}

export default Balance