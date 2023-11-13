import React from "react";
import '../../style/TodoItem.css'

function TodoItem ({content, isComplete, onToggle, onRemove, id}: any) {
    return (
        <div id={id} className="todo-item" onClick={() => onToggle(id)}>
            <div className="todo-item-remove" onClick={(e) => {
                e.stopPropagation();    // onToggle 이 실행되지 않도록 함
                onRemove(id)}
            }>
                &times;
            </div>
            <div className={`todo-item-content ${isComplete && 'isComplete'}`}>
                <div>
                    {content}
                </div>
            </div>
            {
                isComplete && (<div className="isComplete-mark">✓</div>)
            }
        </div>
    )
}

export default TodoItem;