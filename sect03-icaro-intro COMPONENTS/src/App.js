import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' type='h2'/>
      <DisplayBalance title='Your Balance:' value='2,550.53' size='small'/>
      <DisplayBalances />

      <MainHeader title='History' type='h3'/>
      <EntryLine description='First Entry' amount='82.76' isExpense/>
      <EntryLine description='Second Entry' amount='100.34'/>
      <EntryLine description='Third Entry' amount='100.82'/>

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm />

    </Container>
  );
}

export default App;
