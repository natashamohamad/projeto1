import { useEffect } from "react";

export default function VSLBlackNew() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="68ffb7d22ad758e3709e1303"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/68ffb7d22ad758e3709e1303/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="68ffb7d22ad758e3709e1303"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-68ffb7d22ad758e3709e1303" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "12px",
      }} 
    />
  );

};