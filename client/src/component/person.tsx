import {useState} from 'react'
interface Props {
    name: string;
    age: number;
    isStudent: boolean;
} 


export const Person = (props: Props) =>{

    // const [isShowInfo, setShowInfo] = useState<boolean>(false);

    const [Title, setTitle] = useState<string | null>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>{props.isStudent ? "is Student" : "is not Student"}</p>
        <br />
        <h1>{Title}</h1>
        <input onChange={handleInputChange}></input>
      </div>
    );
}