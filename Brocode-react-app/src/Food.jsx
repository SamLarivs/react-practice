function Food(){
    const food1 = "French Dip"
    const food2 = "Apple Pie"
    return(
        <ul>
            <li>Cookies</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>


    );
}

export default Food