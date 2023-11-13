import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({todos, onToggle, onRemove} : any) {

    return (
        <div>
            <div>
                {
                    todos.map((item : {}, idx: number) => (
                        <TodoItem key={idx} {...item} onToggle={onToggle} onRemove={onRemove}></TodoItem>
                    ))
                }
            </div>
        </div>

    )
}

export default TodoItemList;