export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addToDo(toDo) {
    return { type: ADD_TODO, payload: toDo };
}

export function updateToDo(toDo) {
    return { type: UPDATE_TODO, payload: toDo };
}

export function deleteToDo(id) {
    return { type: DELETE_TODO, payload: id };
}

export function toggleToDo(id) {
    return { type: TOGGLE_TODO, payload: id };
}