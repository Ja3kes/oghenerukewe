//import My from './assets/Jakes.jpg'
import My from 'Jakes.jpg'
function Child(){
  const name="Jakes"
  const DEPT="I.T"
  const matricNo="24/2323"
  let age=17
  let courses=["COSC 201","COSC209","IFT 203"]
  
  //line 1-7 can be written as js but after that will be react and html
  return(
    <div>
      <p> My name is <b>{name}</b></p>
      <p>From {DEPT}</p>
      <p>{matricNo}</p>
      {age>=18?<p> I am an <b>adult</b></p>:<p>I am a <b>child</b></p>}
     
          My courses are:
          {course.map(c=>(<p>{c}</p>))}

        
    
    </div>
    
    
  )
}
/*export const GrandChild=()=>{
  return(
    <h2>My name is {name} </h2>
    <h6> GrandChild</h6>
    My COURSES:{course.map(c=>(<p>{c}</p>))}

  )

}*/
export default Child;