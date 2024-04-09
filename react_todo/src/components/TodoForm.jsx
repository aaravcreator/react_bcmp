import {React,useState} from 'react'

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    
  return (
    <form >
      <div className="flex p-5">
        <input   type="text" className=" bg-slate-800 text-white border-2 border-indigo-600 p-2 text-xl w-full  outline-none foucs:outline-none" placeholder='Enter todo ..' />
        <button  className='border-2 border-l-0 border-indigo-600 px-5  py-1  bg-indigo-500 ring-green-400 text-white hover:bg-indigo-600'>Add Todo</button>
      </div>
    </form>
  )
}

export default TodoForm