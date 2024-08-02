"use client";
import React from "react";
import { useEffect, useState } from "react";

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude?: number;
    altitudeAccuracy?: number;
    heading?: number;
    speed?: number;
  };
  timestamp: number;
}

interface GeolocationError {
  code: number;
  message: string;
}

const handleUpdate = async (loc: String) => {
  try {
    const res = await fetch("http://localhost:8080/rider/update/r_2c3d1855", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ curloc: loc }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    console.log("Updated LOC to API!!!!!!!!!");
  } catch (error) {
    console.error("Error:", error);
  }
};
function CurLocation() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationError | null>(null);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      setCounter(counter + 1);
      setPosition(pos);
      handleUpdate(
        String(pos.coords.latitude) + "," + String(pos.coords.longitude)
      );
      console.log(
        "Updated this many time:",
        counter,
        pos.coords.latitude,
        pos.coords.longitude,
        pos.timestamp
      );
    };

    const error = (err: GeolocationError) => {
      setError(err);
    };

    const options = {
      enableHighAccuracy: false,
      timeout: 50000,
      maximumAge: 0,
    };

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, error, options);
    } else {
      setError({
        code: 0,
        message: "Geolocation is not supported by this browser.",
      });
    }
    return () => {
      navigator.geolocation.clearWatch;
    };
  }, []);

  return (
    <div className="">
      {position ? (
        <div className="text-xs">
          Latitude: {position.coords.latitude}
          <br />
          Longitude: {position.coords.longitude}
          <br />
          Counter: {counter}{" "}
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(position.timestamp)}
        </div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div>Loading...</div>
      )}
      <button
        onClick={() => {
          handleUpdate(
            String(position.coords.latitude) +
              "," +
              String(position.coords.longitude)
          );
        }}
      >
        Send to DB
      </button>
    </div>
  );
}

export default CurLocation;
