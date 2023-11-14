import './App.css';
import TodoListTemplate from './components/todolist/TodoListTemplate';
import Form from './components/todolist/Form';
import React, { useState, useRef, useEffect , useMemo } from 'react';
import TodoItemList from './components/todolist/TodoItemList';
import uuid from 'react-uuid';

function App() {

  const [todos, setTodos] = useState([{id:uuid() , content: '리액트를 공부합시다1', isComplete: false}, {id: uuid(), content: '리액트를 공부합시다2', isComplete: true}]);
  const [input, setInput] = useState("");

  const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement> ) => {
      setInput(e.target.value);
  }


  const onCreateHandler = () => {

    if(input === "") {
      alert("오늘 할 일을 입력해주세요.");
      return;
    }
    
    setTodos([...todos, {id: uuid(), content: input, isComplete: false}]);
    setInput("");
    
  }

  const onKeyPressHandler = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      onCreateHandler();  
    }
  }

  const onToggleHandler = (id : string) => {
    const isComplete = todos.find(todo => todo.id === id)?.isComplete;
    if(!window.confirm(isComplete ? "미완료 처리 하시겠습니까 ? " : "완료처리 하시겠습니까 ? ")) {
      return;
    }


    const findIndex = todos.findIndex((item) => item.id === id);
    const selectedItem = todos[findIndex];

    const copyArr = [...todos];

    copyArr[findIndex] = {
      ...selectedItem,
      isComplete: !selectedItem.isComplete
    }

    setTodos(copyArr); 
  } 

  const onRemoveHandler = (id : string) => {

    const removeContent = todos.find(item => item.id === id)?.content;
    if(!window.confirm(`${removeContent} 를 삭제하시겠습니까 ??`)){
      return;
    }
      
    setTodos(todos.filter(item => item.id !== id))
    
  }

  return (
   <div>
      <TodoListTemplate form={<Form value={input} onChange={onChangeHandler} onCreate={onCreateHandler} onKeyPress={onKeyPressHandler} />}>
        <TodoItemList todos={todos} onToggle={onToggleHandler} onRemove={onRemoveHandler} />
      </TodoListTemplate>
   </div>
  );
}


export default App;
