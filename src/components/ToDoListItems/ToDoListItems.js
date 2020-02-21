import React from 'react'
import propTypes from 'prop-types'
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import './ToDoListItems.css'

function ToDoListItems({list, onItemClick, onDeleteClick, onChangeStatus}) {
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

ToDoListItems.propTypes = {
    list: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.oneOfType([propTypes.number, propTypes.string]),
            title: propTypes.string,
            isDone: propTypes.bool
        })
    ),
    onItemClick: propTypes.func,
    onDeleteClick: propTypes.func,
    onChangeStatus: propTypes.func
}

export default ToDoListItems
