import { useState } from 'react'
import './App.css'
import { generateFizzBuzz } from './generateFizzBuzz'


export default function App() {
    const [count, setCount] = useState(0)
    
    function increase() {
      let newCount = count + 1
      setCount(newCount)
    }
    
    function decrease() {
      let newCount = count - 1
      setCount(newCount)
    }
    let checkedForFB = generateFizzBuzz(count)
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrease}>–</button>
            <div>
                <h1>{checkedForFB}</h1>
            </div>
            <button className="counter--plus" onClick={increase}>+</button>
  
        </div>
    )
}
