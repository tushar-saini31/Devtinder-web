import { DEFAULT_PROFILE_PIC } from "../utils/constants";
const UserCard=({user})=>{
    if (!user) return <p>Loading...</p>;
    console.log(user);
    const{firstName, lastName,  photoUrl, age , gender, about}=user;
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
       src={photoUrl?.trim() ? photoUrl : DEFAULT_PROFILE_PIC} 
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age&&gender &&<h2 className="flex justify-start">{"Age: "+age +" ,"+gender} </h2>}
    <p className="flex justify-start">{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested  </button>
    </div>
  </div>
</div>
    )
};
export default UserCard;