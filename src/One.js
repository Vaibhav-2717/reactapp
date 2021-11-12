const One= ()=>{
    const clickMe=()=>{
        alert("My alert generated");
    }

    return(
        <div>
            <p onClick={clickMe}>This is from one component</p>
        </div>
    )
}

export default One