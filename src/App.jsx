import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import Transaction from './components/Transaction'
import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'



function App() {

  return (
    <div className='container max-w-lg mx-auto px-3'>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <AddTransaction />
      </GlobalProvider>
    </div>
  )
}

export default App
