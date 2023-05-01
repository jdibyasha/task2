import {useState} from 'react';
const useCounter = (initialState) => {
const[counter,setCounter] = useState(initialState)
const Increment = () => setCounter(counter+1);
const Decrement = () => setCounter(counter-1);
return {counter,Increment,Decrement}
}
export default useCounter;
