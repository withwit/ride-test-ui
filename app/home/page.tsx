import React from "react";
import CurLocation from "./curlocation";
import ConnectionPage from "../websocket/WebSocketClient";

function HomePage() {
  const dummyRiders = [
    { id: 1, name: "Rider 1" },
    { id: 2, name: "Rider 2" },
    { id: 3, name: "Rider 3" },
  ];

  const dummyDrivers = [
    { id: 1, name: "Driver 1" },
    { id: 2, name: "Driver 2" },
    { id: 3, name: "Driver 3" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-200 to-cyan-100 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-radial from-red-300 to-green opacity-70 rounded-full blur-2xl"></div>
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ backgroundImage: "url('/noise.jpg')", opacity: 0.07 }}
        ></div>
        <div className="relative z-10 grid grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Rider Section */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Rider</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Current Location: <CurLocation />
              </label>
            </div>
            <ConnectionPage />
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Destination Location:
              </label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white bg-opacity-50 border border-gray-300"
              />
            </div>
            <button className="w-full py-2 bg-gradient-to-r from-Malachite-200 to-transparent text-black-100 font-bold rounded shadow-md">
              Create Ride
            </button>
            <div className="mt-6 bg-white bg-opacity-30 p-4 rounded shadow-inner">
              Ride Component
            </div>
          </div>

          {/* Ride Section */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Ride</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Current Location:
                <CurLocation />
              </label>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Destination Location:
              </label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white bg-opacity-50 border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Rider:</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white bg-opacity-50 border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Rider Location:
              </label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white bg-opacity-50 border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Driver Location:
              </label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white bg-opacity-50 border border-gray-300"
              />
            </div>
          </div>

          {/* Driver Section */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Driver</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Current Location:
                <CurLocation />
              </label>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Nearby Riders:</label>
              <div className="bg-white bg-opacity-30 p-4 rounded shadow-inner h-32 overflow-y-auto">
                {dummyRiders.map((rider) => (
                  <div
                    key={rider.id}
                    className="p-2 rounded bg-white bg-opacity-50 mb-2"
                  >
                    {rider.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Nearby Drivers:
              </label>
              <div className="bg-white bg-opacity-30 p-4 rounded shadow-inner h-32 overflow-y-auto">
                {dummyDrivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="p-2 rounded bg-white bg-opacity-50 mb-2"
                  >
                    {driver.name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">List of Ride Requests:</h3>
              <button className="w-full py-2 mb-2 bg-gradient-to-r from-Malachite-200 to-white-10 text-black-100 font-bold rounded shadow-md">
                Ride Request 1
              </button>
              <button className="w-full py-2 bg-gradient-to-r from-Malachite-200 to-white-10 text-black-100 font-bold rounded shadow-md">
                Ride Request 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
