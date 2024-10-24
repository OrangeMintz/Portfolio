import './App.css'
import { Person } from './component/person'

function App() {



  return (
    <>
      <Person name={"Djeikuje Nickolai C. Gacus"} age={22} isStudent={true} />
      <Person name={"Jhon Kert J. Talha"} age={23} isStudent={false} />
    </>
  );
}

export default App
