import { React } from "react";

function FilterSort({ setFilter, setSort }){

  function handleSort(event){
    setSort(event.target.value);
  }

  function handleFilter (event){
    setFilter(event.target.value);
  }

  return(
    <div className="filterSort">
      <span className="sort">
        <p>Sort: </p>
        <select className="selectBar1"onChange={handleSort}>
          <option value="none"  >None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor" >Armor</option>
        </select>
      </span>
      
      <span className="filter">
        <p>Filter: </p>
        <select className="selectBar2" onChange={handleFilter}>
          <option value="none"    >None</option>
          <option value="Support" >Support</option>
          <option value="Medic"   >Medic</option>
          <option value="Assault" >Assault</option>
          <option value="Captain" >Captain</option>
          <option value="Witch"   >Witch</option>
          <option value="Defender">Defender</option>
        </select>
      </span>
    </div>
  );

}

export default FilterSort;