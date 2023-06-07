import useIncrement from "../hook/useIncrement";


function Counter1() {
    const [count, setCount] = useIncrement(1);

    function handleIncrement() {
        setCount();
      }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => {handleIncrement()}}>Add 1</button>
        </>
    )
}

export default Counter1;