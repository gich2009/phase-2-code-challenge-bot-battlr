import './App.css';
import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Enlisted   from "./Components/Enlisted";
import BotList    from "./Components/BotList";
import BotDetails from "./Components/BotDetails";
import FilterSort from './Components/FilterSort';


export const endPoint = 'http://localhost:6001/bots';


function App() {
  const [bots, setBots]                 = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [sort,   setSort]               = useState("none");
  const [filter, setFilter]             = useState("none");


  useEffect(() => {
    fetch(endPoint, {method: "GET"})
    .then((response) => response.json())
    .then((data) => setBots(data))
  }, [])
  

  function enlist(newBot){
    const alreadyEnlisted = enlistedBots.find((enlistedBot) => enlistedBot === newBot);
    const alreadyEnlistedClass = enlistedBots.find((enlistedBot) => enlistedBot.bot_class === newBot.bot_class);

    if (!alreadyEnlisted && !alreadyEnlistedClass){
      setEnlistedBots([...enlistedBots, newBot]);   
    } else if (alreadyEnlisted){
      alert("Bot already enlisted");
    } else if (alreadyEnlistedClass){
      alert("Can only enlist one bot per class");
    }
  }


  function discharge(dischargeId){
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== dischargeId));
  }


  function deleteBot(deleteId){
    setBots(bots.filter((bot) => bot.id !== deleteId));
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== deleteId));
  }
  

  return (
    <div className="App">
      <FilterSort setSort={setSort} setFilter={setFilter}/>
      <Enlisted enlistedBots={enlistedBots} onDischarge={discharge}/>
      <Routes>
        <Route exact path="/"    element={<BotList bots={bots} sort={sort} filter={filter} />} />
        <Route exact path="/:id" element={<BotDetails bots={bots} onEnlist={enlist} onDeleteBot={deleteBot}/>}  />
        <Route path="*"          element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;