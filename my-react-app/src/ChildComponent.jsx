//index.js=root
//App.jsx=parent
//ChildComponent=child
//React is reusable
//this name is coming from the parent and the parent is app.jsx


/*const ChildComponent=(props)=>{

  return (
    <div>
      <h2>
      Hello,{props.name} {props.matricnumber} {props.Department}
      </h2>
     
      
    </div>
  )
}
export default ChildComponent*/




























/*const ChildComponent=({name,matricnum,Dept,Group})=>{
  return(
<h2>
  Hello,{name} {matricnum}{Dept}{Group}
</h2>*/
const ChildComponent=({name})=>{
  return(
    hello,{name}
  )
}
export default ChildComponent