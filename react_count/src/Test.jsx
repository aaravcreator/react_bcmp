function Test(props){
    console.log(props)
    const styles = {
        backgroundColor:"gray",
        padding:"10px",
        marginTop:"25px",
        color:"white"

    }
    return (
        <>
            <h1 className="heading">{props.name}</h1>
            <div style={{
                backgroundColor:"gray",
                padding:"10px",
                marginTop:"25px",
                color:"white"

            }} >{props.location}</div>

            <div style={styles}>Same style </div>
        </>
    
    )
}
export default Test;