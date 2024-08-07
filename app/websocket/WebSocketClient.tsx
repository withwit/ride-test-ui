"use client";
import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

export default function ConnectionPage() {
  const [stompClient, setStompClient] = useState<Client | undefined>(undefined);

  // Environment variables
  const stompClientUrl = process.env.URL_STOMP_CLIENT;

  // Establishing connection
  useEffect(() => {
    console.log("Creating STOMP client...");
    const stompClient = new Client({
      brokerURL: "http://localhost:3000/ws-ride-comm",
    });
    console.log("Activating STOMP connection...");
    stompClient.activate();
    stompClient.onConnect = function () {
      console.log("Successfully connected to STOMP client.");
      setStompClient(stompClient);
    };
  }, [stompClient]);

  return (
    <div>
      <button>Send</button>
    </div>
  );
}
