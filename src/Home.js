import {useState} from 'react'
const Home = () => {
    // initial value , function the changes the value 
    const [name,setName] = useState('Brandon');
    const handleClick = () => {
        setName('newName');
    }

    return (
        
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>);
}

export default Home;