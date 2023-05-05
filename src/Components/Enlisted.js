import { React, useRef } from "react";
import BotItem from "./BotItem";



function Enlisted({ enlistedBots, onDischarge={onDischarge} }){
  
  const enlistedBotsList = enlistedBots.map((enlistedBot) => <BotItem key={enlistedBot.id} bot={enlistedBot} parent="Enlisted" onDischarge={onDischarge} />);

  return(
    <div className="Enlisted">
      {enlistedBotsList}
    </div>
  );
}



export default Enlisted;