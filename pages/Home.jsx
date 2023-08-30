import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import videoSource from '/videos/van.mp4';
import Info from "../components/Info";

export default function Home() {
    const [textVisible, setTextVisible] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleVideoEnd = () => {
            videoElement.style.display = 'none';
        };

        videoElement.addEventListener('ended', handleVideoEnd);

        // After the video starts playing, show the text lines with a delay
        videoElement.addEventListener('playing', () => {
            setTextVisible(true);
        });

        // Clean up the event listener when the component unmounts
        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto min-h-full absolute top-0 left-0 z-0 object-cover"
            >
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="absolute inset-0 z-10">
                <div className="flex flex-col justify-center items-center text-white text-center px-4 bg-black bg-opacity-60 h-full">
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-semibold italic text-center text-white mt-[-100px] mb-4 animate-bounce">
                    Rent your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block mx-2 px-2">
                        <span className="relative text-white">Dream van</span>
                    </span>
                    Today and Start Your Journey!
                </blockquote>
                <p className={`max-w-2xl text-white text-lg md:text-xl lg:text-2xl font-semibold mb-5 relative z-2 ${textVisible ? '' : 'opacity-10'} animation-delay-1 md:animation-delay-2 lg:animation-delay-3`}>
                    <span>Explore, experience, and embrace the open road.</span><br />
                </p>
                <Link
                    to="vans"
                    id="custom-link-button"
                    className="bg-white text-blue-500 hover:text-blue-600 py-2 px-6 mt-3 md:mt-5 rounded-full text-lg md:text-xl lg:text-2xl font-semibold transition duration-300 relative z-2 shadow-xl"
                >
                    Explore Your Van
                </Link>
            </div>

            <Info />
            
        </div>
        </div>

    );
}
