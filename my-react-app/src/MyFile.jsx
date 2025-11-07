const MyFile=()=>{
  //const students=["Jakes","Dave","Abby"]
//We will convert the arrays into objects
 const students=[{ id:1,name:"Jakes"},
  {id:2,name:"Dave"},
  {id:3,name:"Abby"},
{id:4,name:"Abby"},]

  return(
    <>

<h1>Namesof Students
  <h4>{students[0].name}</h4>
</h1>
<ul>{students.map(s=> (<li key={s.id}>{}</li>))}</ul>
</>

  )






}
export default MyFile;
