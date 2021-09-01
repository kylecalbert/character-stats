import React from "react";
import "./App.css";
import { CharacterContextProvider } from "./Components/CharacterContext";
import PrimaryCard from "./Components/PrimaryCard";
import CharacterList from "./Components/CharacterList";

function App() {
  return (
    <CharacterContextProvider>
      <div className="App h-full ">
        <div className="flex bg-blue-200 pt-12 pb-8 items-center justify-center">
          <PrimaryCard />
        </div>
        <CharacterList />
      </div>
    </CharacterContextProvider>
  );
}

export default App;
