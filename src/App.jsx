import { useState } from 'react'
import './App.css'
import { generateFizzBuzz } from './generateFizzBuzz'


export default function App() {
    const [count, setCount] = useState(1)
    
    function increase() {
      let newCount = count + 1
      setCount(newCount)
    }
    
    function reset() {
      let newCount = 1
      setCount(newCount)
    }
    let checkedForFB = generateFizzBuzz(count)
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={reset}>Reset</button>
            <div>
              <h1>{checkedForFB}</h1>
                <h3> Click `Reset` to start again</h3>
            </div>
            <button className="counter--plus" onClick={increase}>Next</button>
  
        </div>
    )
}
