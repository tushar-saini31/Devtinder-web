import { useDispatch } from "react-redux";
import { BASE_URL, DEFAULT_PROFILE_PIC } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
const UserCard = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="relative w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        {/* Image */}
        <img
          className="w-full h-72 object-cover"
          src={photoUrl || DEFAULT_PROFILE_PIC}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_PROFILE_PIC;
          }}
          alt="User Profile"
        />
  
        {/* Info */}
        <div className="p-4 text-white space-y-2">
          <h2 className="text-xl font-semibold">{firstName + " " + lastName}</h2>
          {age && gender && (
            <p className="text-sm text-pink-300">Age: {age}, {gender}</p>
          )}
          <p className="text-xs text-gray-200">
            {about || "This is a default about the user!"}
          </p>
  
          {/* Actions */}
          <div className="flex justify-between mt-4 space-x-4">
            <button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition duration-200"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2 rounded-lg transition duration-200"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default UserCard;
