import React,{useState} from 'react'

function HookCounterTwo() {
const initialCount = 0;
const [count,setCount] = useState(initialCount);

const incrementFive = () =>{
for ( let i=0 ;i< 5;i++) {
    setCount(prevCount => prevCount + 1)
}

}
    return (
        <div>
            Count:{count} <br/>
            <button onClick={() =>setCount(initialCount)}>Reset</button><br/>
            <button onClick={() =>setCount(prevCount => prevCount +1)}>Increment</button><br/>
            <button onClick={() =>setCount(prevCount => prevCount - 1)}>Decrement</button><br/>
            <button onClick={incrementFive}>Increment 5 </button><br/>

        </div>
    )
}

export default HookCounterTwo
