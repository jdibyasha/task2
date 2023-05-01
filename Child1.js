import useCounter from './useCounter';

const Child1 = () => {
  const {counter,Increment,Decrement} = useCounter(0);
  return (
    <div>{counter}
      <button onClick={Increment}>Add</button>
      </div>
  )
}
export default Child1;
