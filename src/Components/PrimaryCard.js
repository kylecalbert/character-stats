import React, { useContext } from "react";
import Search from "./Search";
import "./Card.css";
import { CharacterContext } from "./CharacterContext";

function PrimaryCard() {
  const { character } = useContext(CharacterContext);
  console.log(character);

  const checkPublisher = () => {
    // eslint-disable-next-line default-case
    switch (character?.biography?.publisher) {
      case "DC Comics":
        console.log("purple");

        return "bg-purple-900";

      case "Marvel Comics":
        console.log("red");

        return "bg-red-500";

      default:
        return "bg-blue-500";
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center ">
        <h1 className="font-medium text-4xl	pb-2">Character Stats</h1>
        <div className="pb-1">
          <Search />
        </div>
      </div>

      <div className="py-3 sm:max-w-xl sm:mx-auto ">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2 ">
            <img
              className="rounded-3xl shadow-lg"
              src={
                character?.image?.url || "https://i.stack.imgur.com/y9DpT.jpg"
              }
              alt=""
            />
          </div>

          <div className="flex flex-col space-y-4 ">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{}</h2>
              <div
                className={`${checkPublisher()} text-white font-bold rounded-xl p-2`}
              >
                {character?.biography?.publisher}
              </div>
            </div>
            {character?.image && (
              <div className="grid grid-cols-3 pt-10 gap-4">
                <div className="flex flex-col">
                  <h1>combat</h1>
                  <div>{character?.powerstats?.combat}</div>
                </div>
                <div className="flex flex-col">
                  <h1>durability</h1>
                  <div>{character?.powerstats?.durability}</div>
                </div>
                <div className="flex flex-col">
                  <h1>intelligence</h1>
                  <div>{character?.powerstats?.intelligence}</div>
                </div>
                <div className="flex flex-col">
                  <h1>power</h1>
                  <div>{character?.powerstats?.power}</div>
                </div>
                <div className="flex flex-col">
                  <h1>speed</h1>
                  <div>{character?.powerstats?.combat}</div>
                </div>
                <div className="flex flex-col">
                  <h1>strength</h1>
                  <div>{character?.powerstats?.strength}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryCard;
