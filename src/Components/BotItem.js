import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const healthIconPath   = "./healthIcon.png";
const damageIconPath   = "./damageIcon.png";
const defenderIconPath = "./defenderIcon.jpg";

function BotItem({ bot, parent, onDischarge }){
  const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url} = bot;
  const navigate = useNavigate();
  const params   = useParams();
  let   source   = "";


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


  const classIcon  = <img className={bot_class==="Defender" ? "mainDefenderIcon" : "mainIcon"}   src={source}  alt={bot_class} />
  const healthIcon = <img className="healthIcon"  src={healthIconPath}     alt={health}/>
  const damageIcon = <img className="damageIcon"  src={damageIconPath}     alt={damage}/>
  const armorIcon  = <img className="armorIcon"   src={defenderIconPath}   alt={armor}/>

  function handleClick(){
    // onEnlist(bot);
    if ( parent==="BotList" && parseInt(params.id) !== id ){
      navigate(`/${id}`);
    }

    if (parent==="Enlisted"){
      onDischarge(id);
    }
  }
    
  
  return(
    <div className="card" onClick={handleClick}>
      <div className="cardImage">
        <img src={avatar_url} alt={`Bot ${id}`} />
      </div>
      <div className="cardDetails">
        <p className="bio"> <strong style={{fontSize: "20px"}}>{name}</strong> {classIcon}</p>
        <p className="catchphrase">{catchphrase} </p>
        <div className="specs">
          <p>{healthIcon} {health}  {damageIcon} {damage}  {armorIcon} {armor}</p>
        </div>
      </div>
    </div>
  );

}

export default BotItem;