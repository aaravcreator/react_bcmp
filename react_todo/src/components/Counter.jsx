import {React,useState} from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)
    const  [games,setGames] = useState(["Football","Basketball","Volleyball"])
  
  // let count = 0
  
  const increaseCount =()=>{
    // count = count + 1 
    setCount(count+1)
    console.log(count)
  
  }
  return (
    <div>
      <>
    {count>10?(<h2>Max Count Reached</h2>):(<h2>You can inrease count</h2>)}
    <h1 className='text-3xl font-bold text-indigo-500'>Counter {count}</h1>
    <button disabled={count>10} onClick={increaseCount} >Increase </button>
    <div>
      <h1>Games</h1>
      {games.map(
        (game,index)=>{
        return (<p key={index}>{game}</p>)}
        )
        }
    </div>
    </>
    </div>
  )
}

export default Counter
