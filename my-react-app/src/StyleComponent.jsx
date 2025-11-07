const StyleComponent=()=>{
const myStyle= <h2 style={{color:"red",backgroundColor:"black"}}>My Style component</h2>
  return(
    <div>
    <h2 style={myStyle}>My Styles are here</h2>  
    </div>
  )
}
export default StyleComponent;