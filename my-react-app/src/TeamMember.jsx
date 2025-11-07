function TeamMember({name,role,image}){
  return(
    <h2>
       <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>

    </h2>
  )
}
export default TeamMember