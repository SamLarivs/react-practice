function Button(){
    

    const handleClick = (e) => e.target.textContent = "woof!";

    
    return (
        <button onClick={(e) => handleClick(e)}>Kiss Me in my Ass 😛</button>
    );
}

export default Button;