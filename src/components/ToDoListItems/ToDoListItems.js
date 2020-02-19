import React from 'react'
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import './ToDoListItems.css'

function ToDoListItems({ list, onItemClick, onDeleteClick, onChangeStatus }) {
    return (
        <table className="table table-hover">
            <tbody>
                {list.map((item) => (
                    <ToDoListItem
                        key={item.id}
                        item={item}
                        onItemClick={onItemClick}
                        onDeleteClick={onDeleteClick}
                        onChangeStatus={onChangeStatus}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ToDoListItems
