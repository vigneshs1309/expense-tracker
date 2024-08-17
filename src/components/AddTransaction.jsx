import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

    setText('');
    setAmount(0);
  }


  return (
    <div>
      <h1 className='font-bold text-lg'>Add New Transaction</h1>
      <div className='border-b-2 border-b-black opacity-30'></div>
      <form className='mt-2' onSubmit={handleSubmit}>
        <label htmlFor="" className='font-semibold text-md'>Text</label>
        <input type="text" 
        placeholder='Enter Text'
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-full my-2 border-black p-1' />
        <label htmlFor="" className='font-semibold'> 
        Amount
        </label>
        <p className='font-semibold'>(negative=expense, positive=income)</p>
        <input 
        type="number"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className='w-full my-2 p-1 border-black  ' />
        <input type="submit" value="Add Transaction" className='w-full p-2 bg-purple-400 text-white font-semibold hover:cursor-pointer' />
      </form>
    </div>
  )
}

export default AddTransaction