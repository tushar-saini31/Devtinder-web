import { DEFAULT_PROFILE_PIC } from "../utils/constants";

const UserCard = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  const { firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-80 bg-gray-900 shadow-xl rounded-2xl text-white">
        <figure>
          <img
            className="w-full h-72 object-cover rounded-t-2xl"
            src={photoUrl && photoUrl.trim() !== "" ? photoUrl : DEFAULT_PROFILE_PIC}
            alt="User Profile"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">{firstName + " " + lastName}</h2>
          {age && gender && (
            <h2 className="text-sm text-gray-400">{"Age: " + age + ", " + gender}</h2>
          )}
          <p className="text-xs text-gray-300">{about || "This is a default about the user!"}</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn  btn-primary px-4 py-1 text-sm">Ignore</button>
            <button className="btn  btn-secondary px-4 py-1 text-sm">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


