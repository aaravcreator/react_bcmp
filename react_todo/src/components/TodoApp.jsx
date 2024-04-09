import {React,useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
const  TodoApp = ()=> {
    const [todos, setTodos] = useState([{
        id:1,
        task:"Buy groceries",
        completed:false,
        isEditing:false
      },
      {
        id:2,
        task:"Buy Food and Fruit",
        completed:true,
        isEditing:false
      },
      ])
      
    let  nextId=2;
      const  addTodo = (todo)=>{
        // let mytodo = {
        //   id : nextId,
        //   task:todo,
        //   completed:false,
        //   isEditing:false
        // }
        // nextId++
        
        // setTodos([mytodo, ...todos])
        // console.log(todos)
        let mytodo = {
          id:nextId,
          task:todo,
          completed:false,
          isEditing:false
        }
        nextId++
        const new_list = todos.append(mytodo)
        setTodos(new_list)
        }
    
     
    
      function toggleTodo(id){
        // setTodos(todos.map((todo)=>todo.id === id ? {...todo,completed : !todo.completed} : todo))
    
      }
    
      function deleteTodo(id){
        // setTodos([...todos.filter(todo=>todo.id != id)])
      }
    
      // just to make edit form appear
      function editTodo(id){
        // setTodos(todos.map((todo)=>todo.id === id ? {...todo,isEditing : true} : todo))
    
      }

      return (
        <div className="container mx-auto px-10 py-10">
          
          <div className="mx-auto bg-slate-800 max-w-5xl rounded-xl p-2">
          <h1 className='text-center text-3xl text-white'>TodoApp</h1>
          <TodoForm />
            {
                todos.map(

                    (todo)=>{

                        return (<Todo todo={todo}/>)

                    }
                )
            }
           
    
          </div>
        
        </div>
      )
}

export default TodoApp