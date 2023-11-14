import React, {useEffect, useMemo} from "react";
import TodoItem from "./TodoItem";

function TodoItemList({todos, onToggle, onRemove} : any) {

    const render = () => {
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

    const memorizationRender = useMemo(() => {
        return render();
    }, [todos]) 

    return (
        memorizationRender
    )
}

export default TodoItemList;