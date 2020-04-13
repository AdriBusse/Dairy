//returns the actual date in format dd-mm-yyyy

export default ()=>{
    const date = new Date();
    return date.toISOString().split("T")[0]
}