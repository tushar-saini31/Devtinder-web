import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const EditProfile = ({ user = {} }) => {
  const dispatch = useDispatch();

  // Ensure `user` is never undefined
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age ?? "");
  const [about, setAbout] = useState(user?.about || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age ?? "");
      setAbout(user.about || "");
      setGender(user.gender || "");
      setPhotoUrl(user.photoUrl || "");
    }
  }, [user]);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Profile update failed:", err);
      setError(err.message);
    }
  };

  return (
    <div>
<div
  className="min-h-screen bg-cover bg-center flex justify-center items-center "
  style={{
    backgroundImage: "url('https://nordicapis.com/wp-content/uploads/Case-Study-Lessons-Learned-Making-the-Tinder-API-Gateway-1024x576.png')",
  }}
>        <div className="card card-border bg-gradient-to-r from-gray-200 to-gray-500 w-96   p-2 mt-15">
          <div className="card-body">
            <h2 className="card-title justify-center ">Edit Profile</h2>
            <div>
              <p className="flex justify-start text-gray-700">First Name:</p>
              <label className="input validator">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <p className="flex justify-start text-gray-700">Last Name:</p>
              <label className="input validator">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <p className="flex justify-start text-gray-700">Age:</p>
              <label className="input validator">
                <input
                  type="number"
                  required
                  placeholder="Age"
                  value={age || ""}
                  onChange={(e) => setAge(Number(e.target.value) || "")}
                />
              </label>
            </div>
            <div>
              <p className="flex justify-start text-gray-700">Gender:</p>
              <label className="input validator">
                <input
                  type="text"
                  required
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
            </div>
            <div>
              <p className="flex justify-start text-gray-700">Photo URL:</p>
              <label className="input validator">
                <input
                  type="text"
                  required
                  placeholder="Photo URL"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>
            </div>
            <div>
              <p className="flex justify-start text-gray-700">About You:</p>
              <fieldset className="fieldset">
                <textarea
                  className="textarea h-24"
                  placeholder="Bio"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <div className="fieldset-label text-gray-700">Optional</div>
              </fieldset>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <UserCard user={{ firstName, lastName, gender, age, photoUrl, about }} />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center p-20">
          <div className="alert alert-success bg-green-400">
            <span className="text-white">Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;