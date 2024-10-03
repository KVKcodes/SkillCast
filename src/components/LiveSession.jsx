import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const LiveSession = () => {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsReady(true);
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleJoinSession = () => {
    // Implement the logic to join the actual session
    console.log(`Joining session for webinar ID: ${id}`);
  };

  return (
    <div className="live-session">
      <h2>Prepare for Live Session</h2>
      <video ref={videoRef} autoPlay muted className="w-full max-w-md mx-auto mb-4" />
      {isReady ? (
        <button
          onClick={handleJoinSession}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Session
        </button>
      ) : (
        <p>Setting up your camera...</p>
      )}
    </div>
  );
};

export default LiveSession;