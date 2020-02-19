import React from 'react'
import './ToDoListItem.css'

function ToDoListItem({ item, onItemClick, onDeleteClick, onChangeStatus }) {

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDeleteClick(item.id);
    }

    const handleEditClick = (e) => {
        e.stopPropagation();
        onItemClick(item.id);
    }

    const handleChangeStatus = (e) => {
        e.stopPropagation();
        onChangeStatus(item.id);
    }

    return (
        <tr>
            <td
                className={`todolist-item ${item.isDone ? 'done' : ''}`}
                onClick={handleChangeStatus}
            >{item.title}
                <button
                    className="btn-sm todolist-edit-btn"
                    onClick={handleEditClick}
                >Edit
            </button>
                <button
                    className="btn-sm todolist-del-btn"
                    onClick={handleDeleteClick}
                >Delete
            </button>
            </td>
        </tr>
    )
}

export default ToDoListItem
