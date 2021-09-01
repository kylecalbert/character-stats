import React, { useContext } from "react";
import { CharacterContext } from "./CharacterContext";

function CharacterList() {
  const { setData, data } = useContext(CharacterContext);
  const { setCharacter, character } = useContext(CharacterContext);

  return (
    <div className="md:pt-10 grid sm:grid-cols-4  ">
      {data.map((i) => (
        <div className=" rounded w-44 h-60 mb-4 mt-4 ml-4">
          <div className="rounded relative bg-green-600">
            <div className="rounded absolute bg-gray-700 w-full opacity-80">
              <h1 className="opacity-100 text-2xl font-extrabold text-white">
                {i.name}
              </h1>
            </div>
            <img
              className="rounded h-60 w-44"
              src={i.image.url}
              onClick={() => setCharacter(i)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
