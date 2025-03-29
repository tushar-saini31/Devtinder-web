import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addConnections } from "../utils/ConnectionSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_USER_PIC } from "../utils/constants";
const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchConnections = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/user/connections`, {
                    withCredentials: true,
                });
                console.log(res.data.data);
                dispatch(addConnections(res.data.data));
            } catch (err) {
                console.error("Error fetching connections:", err);
            }
        };

        fetchConnections();
    }, [dispatch]);

    if (!connections || !Array.isArray(connections)) return <h1>Loading...</h1>;
    if (connections.length === 0) return <h1>No Connection Found</h1>;

    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-2xl">Connections</h1>
    
            {connections.map((connection, index) => {
                const { firstName, lastName, photoUrl, age, gender, about } = connection;
    
                return (
                    <div key={index} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
                        <div>
                            <img 
                                src={photoUrl || DEFAULT_USER_PIC} 
                                alt="Profile" 
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                        <div className="text-left mx-4">
                            <h2 className="font-bold text-xl text-center text-amber-200">
                                {firstName} {lastName}
                            </h2>
                            {age && gender && <p>{age}, {gender}</p>}
                            <p>{about || "No bio available."}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Connections;
