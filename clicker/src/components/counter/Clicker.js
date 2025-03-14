function Clicker({ onIncrement }){
    let clicks = 0;
    const handleClick = () => {
        clicks++;

        if(clicks === 9){
            onIncrement();
        }
    }


    return(
        <>
            <button onClick={handleClick}>Increment</button>
        </>
    );
}

export default Clicker;