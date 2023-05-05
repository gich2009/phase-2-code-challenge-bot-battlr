import React from "react";
import { useParams } from "react-router-dom";
import BotDetailsCard from "./BotDetailsCard";

function BotDetails({ onEnlist, bots, onDeleteBot }) {
  const { id } = useParams();
  const bot = bots.find((bot) => bot.id === parseInt(id));

  if (!bot) {
    return <h1>Bot not found</h1>;
  }


  return (
    <div>
      <BotDetailsCard bot={bot} onEnlist={onEnlist} onDeleteBot={onDeleteBot}/>
    </div>
  );
}

export default BotDetails;
