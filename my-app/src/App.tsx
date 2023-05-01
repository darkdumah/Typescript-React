import './App.css';
import { Container } from './Container/Container';
import { Button } from './components/Button/Button';
import { Greet } from './components/Greet/Greet';
import { Heading } from './components/Heading/Heading';
import { Input } from './components/Input/Input';
import { Oscar } from './components/Oscar/Oscar';
import Person from './components/Person/Person';
import { PersonList } from './components/PersonList/PersonList';
import { Status } from './components/Status/Status';
import { Reduce } from './components/state/Reduce';
import { User } from './components/state/User';
import { ThemeContextProvider } from './context/ThemeContext';
import { Box } from './context/Box';


function App() {

const personName = {
  first: 'Bruce',
  last: 'Wayne'
}

const nameList = [
  {
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Robert',
    last: 'Barathion'
  }
]

  return (
    <div className="App">
      <Greet name='Radu Constantin' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={'success'} />
      <Heading>Lorem ipsum.</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />
      <Input value='' handleChange={event => {
        console.log(event)
      }}/>
      <Container styles={{
        border: '3px solid black',
        padding: '1rem'}}/>
      {/* <LoggedIn /> */}
      <User />
      <Reduce />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
