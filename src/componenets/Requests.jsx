import axios from "axios";
import { BASE_URL, DEFAULT_USER_PIC } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/RequestSlice";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; // ✅ Import shimmer

const Requests = () => {
  const request = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      fetchRequests(); // Refresh list
    } catch (err) {
      console.error("Error reviewing request:", err);
    }
  };

  const fetchRequests = async () => {
    try {
      setLoading(true); // ✅ Start loading
      const res = await axios.get(`${BASE_URL}/user/request/recieved`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // ✅ Show shimmer UI while loading
  if (loading) return <Shimmer />;

  if (!request) return null;

  if (request.length === 0)
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/09/81/82/60/360_F_981826058_c601wN76lEikvnDzlXwsTHuJFUUxKvwK.jpg')",
        }}
      >
        <div className="bg-white/80 p-8 rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-700">No Requests Found</h1>
        </div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/smiling-sunflower-toy-against-blue-background_1223942-7838.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl text-white mt-10">Users Requests</h1>
      </div>
    <div className="h-[550px] overflow-y-auto space-y-4 pr-2 scrollbar-hide">
      {request.map((req) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          req.fromUserId;
          console.log(photoUrl);
        return (
            
          <div
            key={_id}
            className="flex m-4 p-4 justify-between items-center rounded-lg bg-red-400  lg:w-2/5 mx-auto shadow-md backdrop-blur"
          >
            <div>
              <img
                src={photoUrl || DEFAULT_USER_PIC}
                alt="Profile"
                className="w-20 h-20 rounded-full border border-gray-300"
              />
            </div>
            <div className="text-left mx-4 flex-grow">
              <h2 className="font-bold text-xl text-gray-800">
                {firstName} {lastName}
              </h2>
              {age && gender && (
                <p className="text-gray-600">
                  {age}, {gender}
                </p>
              )}
              
              <p className="text-gray-700">{about || "No bio available."}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("accepted", req._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("rejected", req._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Requests;
