import useCounter from "./useCounter";

const Child2 = () => {
  const { counter, Increment, Decrement } = useCounter(0);
  return (
    <div>
      {counter}
      <button onClick={Increment}>Add</button>
    </div>
  );
};
export default Child2;
