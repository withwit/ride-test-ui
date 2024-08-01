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

function Locationpage() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationError | null>(null);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      setCounter(counter + 1);
      setPosition(pos);
      console.log(
        "Updated this many time:",
        counter,
        pos.coords.latitude,
        pos.coords.longitude
      );
    };

    const error = (err: GeolocationError) => {
      setError(err);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
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
    <div>
      {position ? (
        <div>
          Latitude: {position.coords.latitude}
          Longitude: {position.coords.longitude}
          Counter: {counter}
        </div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div>Loading...</div>
      )}
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        ++
      </button>
    </div>
  );
}

export default Locationpage;
