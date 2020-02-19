import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ToDoModal.css'


function ToDoModal({ toDo, headerTitle, show, onClose, onSave }) {
    const [toDoItem, setToDoItem] = useState(toDo);

    useEffect(() => {
        setToDoItem(toDo);
    }, [toDo]);


    const onClickSave = () => {
        onSave(toDoItem);
        onClose();
    }

    function onTitleChange(e) {
        setToDoItem({
            ...toDoItem,
            title: e.target.value
        });
    }

    return (
        <div className={show ? 'modal-wrapper' : 'container'}>
            <div className={show ? 'modal-show' : 'modal'}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                className="btn btn-light modal-close-btn"
                                onClick={onClose}
                            >
                                X
                            </button>
                            <h4>{headerTitle}</h4>
                        </div>
                        <div className="modal-body">
                            <textarea
                                name="title"
                                className="modal-body-text"
                                placeholder="Enter some things to do"
                                value={toDoItem.title}
                                onChange={onTitleChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={onClickSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoModal
