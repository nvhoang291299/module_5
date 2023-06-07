import useIncrement from '../hook/useIncrement';


function Counter2() {
    const [count, setCount] = useIncrement(2);

    function handleIncrement() {
        setCount();
      }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => {handleIncrement()}}>Add 2</button>
      
        </>
    )
}


export default Counter2;