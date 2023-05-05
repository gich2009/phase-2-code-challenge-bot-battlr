import React from "react";
import BotItem from "./BotItem"

function BotList({ bots, sort, filter }){
  const filteredBots = bots.filter((bot) => filter ==="none" ? true : bot.bot_class === filter);

  const sortedBots = filteredBots.sort((a, b) => b[sort] - a[sort]);

  const botList = sortedBots.map((bot) => {
    return <BotItem key={bot.id} className="unelistedCard" bot={bot} parent="BotList"/>
  })
  
  return(
    <div className="BotList">
      {botList}
    </div>
  );
}

export default BotList;