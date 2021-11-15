import { useEffect, useReducer, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);
  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]);

  ///

  // function editEntry(id) {
  //   console.log(`edit entry with id ${id}`);
  //   if (id) {
  //     const index = entries.findIndex((entry) => entry.id === id);
  //     const entry = entries[index];
  //     setEntryId(id);
  //     setDescription(entry.description);
  //     setValue(entry.value);
  //     setIsExpense(entry.isExpense);
  //     setIsOpen(true);
  //   }
  // }

  // function addEntry() {
  //   const result = entries.concat({
  //     id: entries.length + 1,
  //     description,
  //     value,
  //     isExpense,
  //   });
  //   console.log('result', result);
  //   console.log('entries', entries);
  //   // setEntries(result);
  //   resetEntry();
  // }

  // function resetEntry() {
  //   setDescription('');
  //   setValue('');
  //   setIsExpense(true);
  // }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value={total} size='small' />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm/>
      <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50,
    isExpense: true,
  },
];