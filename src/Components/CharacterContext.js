import React, { createContext, useState } from "react";

export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [character, setCharacter] = useState([]);

  return (
    <CharacterContext.Provider
      value={{ data, setData, character, setCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
