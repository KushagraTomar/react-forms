import './App.css';
import { useState } from 'react';

function App() {
  const [username,setName] = useState('')
  const [age,setAge] = useState('')
  const [car,setCar] = useState('volvo')

  const handleName = e => {
    setName(e.target.value)
  }
  const handleAge = e => {
    setAge(e.target.value)
  }
  const handleCar = e => {
    setCar(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    alert(`age and car of user ${username} is ${age} and ${car}`)
    setName('')
    setAge('')
    setCar('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>enter name:</label>
        <input type='text' value={username} onChange={handleName}/>

        <label>enter age:</label>
        <input type='number' value={age} onChange={handleAge}/>

        <select value={car} onChange={handleCar}>
          <option value='volvo'>volvo</option>
          <option value='ford'>ford</option>
          <option value='fiat'>fiat</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
