// src/App.jsx
import { useState } from "react";
import "./App.css"

const App = () => {
  const [team,setTeam] = useState([])
  const [money,setMoney] = useState(100)
  const [zombieFighters,setZomebiFighters] = useState([
    {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  }]
  )

  const handleAddfighter= (zombieFighter) =>{
    console.log(`zombieFighter: `, zombieFighter)
    console.log(`Current money ${money}`)
    if(money >= zombieFighter.price){
      let calcMoney = money - zombieFighter.price
      setTeam([...team,zombieFighter])
      setZomebiFighters(zombieFighters .filter((value)=> value.id !== zombieFighter.id))
      setMoney(calcMoney)
    } else (
      console.log(`Not enough money! Left ${money}`)
    )



  }

  const handleRemoveFighter = (zombieFighter) => {
    console.log(`remove func`, [zombieFighter.name])
    let calcMoney = money + zombieFighter.price
    setZomebiFighters([...zombieFighters, zombieFighter])
    setTeam(team.filter((value)=> value.id !== zombieFighter.id))
    setMoney(calcMoney)
  }
  
// console.log([zombieFighters])

    let totalStrength = 0
    team.forEach((teamStrength) => {
      totalStrength = totalStrength + teamStrength.strength
      // console.log(`Team Strength ${totalStrength}`)
    })

    let totalAgility = 0
    team.forEach((teamAgility)=>{
      totalAgility = totalAgility + teamAgility.agility
    })

  return (
    <>
    <h1>Zomebie Fighters!</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {totalStrength}</h2>
    <h2>Tea Agility: {totalAgility}</h2>
    <h2>Team :</h2>
    <ul>
        {team.map((teamMate, idx) => (
          <li key={idx}>  
          <p>Name: {teamMate.name}</p>
          <p>Price: {teamMate.price}</p>
          <p>Strength: {teamMate.strength}</p>
          <p>Agility:  {teamMate.agility}</p>
          <button onClick={()=> handleRemoveFighter(teamMate)}>Remove</button>
          </li>
        ))}
    </ul>
    <h2>Fighers :</h2>
    <ul>
        {zombieFighters.map((zombieFighter, idx) => (
          <li key={idx}>  
          <p>Name: {zombieFighter.name}</p>
          <p>Price: {zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility:  {zombieFighter.agility}</p>
          <button onClick={()=>handleAddfighter(zombieFighter)}>Add</button>
          </li>
        ))}
    </ul>
    </>
  );
}

export default App
