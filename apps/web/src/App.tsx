import "./App.css";
import MiddleText from "@/components/centerText/middleText";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((data) => {
        console.log("API health:", data);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);
  
  return (
    <>
      <MiddleText text="Welcome to LoveWrapped!" />
    </>
  );
}

export default App;
