import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch user data from Picsum API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Call API whenever page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Gallery Section */}
      <div className="flex flex-wrap justify-center gap-4 p-4 flex-1 overflow-auto">
        {loading ? (
          <h3 className="text-gray-400 text-sm font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Loading images...
          </h3>
        ) : (
          userData.map((item) => <Card key={item.id} elem={item} />)
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-6 p-4 border-t border-gray-700">
        <button
          className={`bg-amber-400 text-black text-sm rounded px-4 py-2 font-semibold active:scale-95 transition-all duration-150 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-500"
          }`}
          onClick={() => {
            if (page > 1) {
              setPage((prev) => prev - 1);
              setUserData([]);
            }
          }}
          disabled={page === 1}
        >
          Prev
        </button>

        <h4 className="font-bold text-lg">Page {page}</h4>

        <button
          className="bg-amber-400 text-black text-sm rounded px-4 py-2 font-semibold active:scale-95 hover:bg-amber-500 transition-all duration-150"
          onClick={() => {
            setPage((prev) => prev + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
