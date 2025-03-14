function Clicker({ onIncrement }){
    let click = 0;
    const handleClick = () => {
        click++;
        if(click == 9){
            onIncrement();            
        }
    }

    return(
        <>
            <button onClick={handleClick}>Clique aqui</button> 
        </>
    );
}

export default Clicker;