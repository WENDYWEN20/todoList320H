import { useState } from 'react'
import {useReducer} from 'react'

import TodoContent from './TodoContent'

import './App.css'
//how reducer function is called to update the state during dispatch: reducer function is called whenever you call the dispatch function
//When utilizing reducers, instead of directly "setting the state" with a set function, we "dispatch actions" with a dispatch function. Instead of telling React what to do by setting state, we tell it what the user did by dispatching an action.

function reducer(state, action){
  console.log(action)
  switch(action.type){
  case 'add_todo': {
    //create a new todo object with title id and completed status
    const newTodo={title: action.payload.title, completed: false,
    id: Date.now(),
  }
    return [newTodo, ...state];
  }

  case 'delete-todo':{
    console.log(action.payload.id)
    return state.filter((todo) => todo.id !==action.payload.id);}
    //delete a new todo object from old state
//  case 'edit-todo':{

//  }
  default: throw new Error(`Action not found ${action.type}`)
   }

}

function App() {
  const [todos, todosDispatch] = useReducer(reducer, initialState)
  const [title, setTitle]=useState('')
  
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(title)
  todosDispatch({type: 'add_todo', payload:{title}})
  setTitle(" ")
}

  return (
    <>
      <div className='App'> 
       <h1>Todo List</h1>
       <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button>Add</button>
       </form>
   {todos.map((todo)=>(<TodoContent  javascriptPass={todo} todosDispatch={todosDispatch}/>))}

       </div>
     
    </>
  )
}


const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];
export default App
