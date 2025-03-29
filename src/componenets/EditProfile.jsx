import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"; // Import Redux action
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch(); // Initialize Redux dispatch

  // Local state for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Update local state when `user` prop changes
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age || "");
      setAbout(user.about || "");
      setGender(user.gender || "");
      setPhotoUrl(user.photoUrl || "");
    }
  }, [user]);

  // Handle form submission
  const saveProfile = async () => {
    setError(""); // Clear error
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {/* Updated flex container for responsive layout */}
      <div className="flex justify-center items-center h-screenr gap-10">
        {/* Edit Profile Card */}
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>

            {/* Input fields */}
            <div>
              <p className="flex justify-start">First Name:</p>
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
              <p className="flex justify-start">Last Name:</p>
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
              <p className="flex justify-start">Age:</p>
              <label className="input validator">
                <input
                  type="number"
                  required
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </div>
            <div>
              <p className="flex justify-start">Gender:</p>
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
              <p className="flex justify-start">Photo URL:</p>
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
              <p className="flex justify-start">About You:</p>
              <fieldset className="fieldset">
                <textarea
                  className="textarea h-24"
                  placeholder="Bio"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <div className="fieldset-label">Optional</div>
              </fieldset>
            </div>

            {/* Error Message */}
            <p className="text-red-500">{error}</p>

            {/* Save Button */}
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>

        {/* User Card - Displays Updated Details */}
        <UserCard user={{ firstName, lastName, gender, age, photoUrl, about }} />
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span className="text-gray-900">Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
