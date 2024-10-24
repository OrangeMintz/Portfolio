import './App.css'

function App() {

  
  type Person = {
    name: string,
    age: number,
    hobby?: string,
    sex: string,
    student: boolean
  };

  let person: Person = {
    name: "Djeikuje Nickolai C. Gacus",
    age: 22,
    hobby: "Gaming, Coding",
    sex: "Male",
    student: true
  }

  person = {
    name: "Jhon Kert J. Talha",
    age: 22,
    sex: "Male",
    student: true
  }

  return (
    <>
      <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.hobby}</h1>
        <h1>{person.sex}</h1>
        <h1>{person.student ? "True" : "False"}</h1>
      </div>
    </>
  );
}

export default App
