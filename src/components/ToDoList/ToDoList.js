import React, { useState, useEffect } from 'react'
import ToDoListItems from '../ToDoListItems/ToDoListItems';
import ToDoModal from '../ToDoModal/ToDoModal';
import api from '../../services/api';
import './ToDoList.css'

function ToDoList() {
    const defaultToDo = () => {
        return {
            id: '',
            title: '',
            isDone: false
        }
    }
    const [toDoList, setToDoList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [activeToDo, setActiveToDo] = useState(defaultToDo);

    const onClickShowModal = () => {
        setModalShow(!modalShow);
    }

    const onItemEdit = (id) => {
        const toDo = toDoList.find(function (item) { return item.id === id });
        setActiveToDo(toDo);
        setModalShow(!modalShow);
    }

    const onItemChangeStatus = (id) => {
        const toDo = toDoList.find(item => item.id === id);
        updateToDo({ ...toDo, isDone: !toDo.isDone });
    }

    const onItemDelete = (id) => {
        api.delete(id).then(resp => {
            setToDoList(toDoList.filter(item => item.id !== resp.data.id));
        });
    }

    const onItemChange = (toDo) => {
        if (toDo.id) {
            updateToDo(toDo);
        } else {
            addToDo(toDo);
        }
    }

    const addToDo = (toDo) => {
        api.post('', toDo).then(resp => {
            setToDoList([...toDoList, resp.data]);
            clearToDo();
        });
    }

    const updateToDo = (toDo) => {
        api.put(toDo.id, toDo).then(resp => {
            setToDoList(toDoList.map(item => (item.id === toDo.id ? toDo : item)));
            clearToDo();
        });
    }

    const clearToDo = () => {
        const emptyToDo = defaultToDo();
        setActiveToDo(emptyToDo);
    }

    useEffect(() => {
        api.get('').then(resp => setToDoList(resp.data));
    }, [])

    return (
        <div className="todolist-container">
            <header className="todolist-header">To Do list</header>
            <ToDoListItems
                list={toDoList}
                onItemClick={onItemEdit}
                onDeleteClick={onItemDelete}
                onChangeStatus={onItemChangeStatus}
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
