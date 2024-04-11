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
  const decreaseCount =()=>{
    // count = count + 1 
    setCount(count-1)
     
    console.log(count)
  
  }
  return (
    <div>
      <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
      </div>
      <>
    {
    count>10 ? (
      <h2 className='bg-red-400 p-5 rounded-xl'>
      Max Count Reached
      </h2>
      ):
      (<h2 className='bg-blue-300 p-5 rounded-xl '>
        You can increase count
      </h2>
        )
        }
    <h1 className='text-3xl font-bold text-indigo-500'>Counter {count}</h1>
    <button className=' disabled:bg-gray-500 disabled:hover: cursor-pointer bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 hover:ring-2 hover:ring-gray-400 rounded-xl'
     disabled={count>10} onClick={increaseCount} >
      Increase
      </button>
      {" "}      
      <button className=' disabled:bg-gray-500 disabled:hover: cursor-pointer bg-orange-500 px-4 py-2 text-white  hover:ring-2 hover:ring-gray-400 rounded-xl'
     disabled={count<=0} onClick={decreaseCount} >
      Decrease
      </button>
    <div>
      <h1 className='text-4xl '>Games</h1>
      {games.map(
        (game,index)=>{
        return (<p className='text-blue-500 text-xl' key={index}>{game}</p>)}
        )
        }
    </div>
    </>
    </div>
  )
}

export default Counter
