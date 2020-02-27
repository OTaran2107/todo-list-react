import React, { useState } from 'react'
import ToDoListItems from '../ToDoListItems/ToDoListItems';
import ToDoModal from '../ToDoModal/ToDoModal';
import './ToDoList.css'

function ToDoList({ toDoList, addToDo, updateToDo, deleteToDo, toggleToDo }) {
    const emptyToDo = {
        id: '',
        title: '',
        isDone: false
    };

    const [activeToDo, setActiveToDo] = useState(emptyToDo);
    const [modalShow, setModalShow] = useState(false);

    const onClickShowModal = () => {
        setModalShow(!modalShow);
    }

    const onItemEdit = (id) => {
        const toDo = toDoList.find(item => item.id === id);
        setActiveToDo(toDo);
        setModalShow(!modalShow);
    }

    const onItemChange = (toDo) => {
        if (toDo.id) {
            updateToDo(toDo);
        } else {
            addToDo(toDo);
        }
        clearToDo();
    }

    const clearToDo = () => {
        setActiveToDo(emptyToDo);
    }

    return (
        <div className="todolist-container">
            <header className="todolist-header">To Do list</header>
            <ToDoListItems
                list={toDoList}
                onItemClick={onItemEdit}
                onDeleteClick={deleteToDo}
                onChangeStatus={toggleToDo}
            />
            <button
                onClick={onClickShowModal}
                className="btn-success btn-sm todo-modal-open-btn"
            >Add new
            </button>
            <ToDoModal
                key={activeToDo.id}
                show={modalShow}
                onClose={onClickShowModal}
                onSave={onItemChange}
                toDo={activeToDo}
                headerTitle={activeToDo.id === '' ? 'New TO DO' : 'Edit TO DO'}
            />
        </div>
    )
}

export default ToDoList
