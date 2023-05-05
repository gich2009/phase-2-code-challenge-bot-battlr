import React from "react";
import { useNavigate } from "react-router-dom";
import { endPoint } from "../App";


const healthIconPath   = "./healthIconRed.jpg";
const damageIconPath   = "./damageIconYellow.png";
const defenderIconPath = "./defenderIconBlue.jpg";


function BotDetailsCard({ onEnlist, bot, onDeleteBot }){
  const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url} = bot;
  let source = "";
  const navigate = useNavigate();

  switch(bot_class){
    case "Assault":
      source = "./assaultIcon.png";
      break;
    case "Support":
      source = "./supportIcon.webp";
      break;
    case "Medic":
      source = "./medicIcon.png";
      break;
    case "Witch":
      source = "./witchIcon.png";
      break;
    case "Defender":
      source = "./defenderIcon.jpg";
      break;
    case "Captain":
      source = "./captain.png";
      break;
  }

  const classIcon  = <img className="mainIcon"          src={source}             alt={bot_class} />
  const healthIcon = <img className="healthIconRed"     src={healthIconPath}     alt={health}/>
  const damageIcon = <img className="damageIconYellow"  src={damageIconPath}     alt={damage}/>
  const armorIcon  = <img className="armorIconBlue"     src={defenderIconPath}   alt={armor}/>


  function handleGoBack(){
    navigate('/');
  }

  function handleEnlist(){
    onEnlist(bot);
    navigate('/');
  }

  function handleDelete(){
    fetch(`${endPoint}/${id}`, {method: "DELETE"})
    .then((response) => response.json());

    onDeleteBot(id);

    navigate('/');
  }


  return (
    <div className="botDetailsCard">
      <span className="botDetailsCardImage">
          <img src={avatar_url} alt={`Bot ${id}`} />
      </span>

      <span>
        <div>
          <p style={{fontSize: "20px", fontWeight: "520"}}>Name: {name}</p>
          <p><strong>Catchphrase:</strong></p>
          <p>{catchphrase}</p>
          <p><strong>Class: {bot_class}</strong> {classIcon}</p>
        </div>
        <div className="specs">
          <p>{healthIcon} {health}  {damageIcon} {damage} {armorIcon} {armor}</p>
        </div>

        <div>
          <button onClick={handleGoBack}>Go back</button>
          <button onClick={handleEnlist}>Enlist</button>
          <button onClick={handleDelete}>Delete Bot</button>
        </div>

      </span>
    </div>
  )
}

export default BotDetailsCard;