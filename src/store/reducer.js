import {TOGGLE_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO} from './actions'

const initialState = {
    toDoList: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case TOGGLE_TODO:
            return {
                toDoList: state.toDoList.map(todo => todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo)
            };
        case ADD_TODO:
            return {
                toDoList: [
                    ...state.toDoList,
                    {
                        ...payload,
                        id: `f${(+new Date()).toString(16)}`
                    }
                ]
            };
        case UPDATE_TODO:
            return {
                toDoList: state.toDoList.map(item => (item.id === payload.id ? payload : item))
            };
        case DELETE_TODO: {
            return {
                toDoList: state.toDoList.filter(item => (item.id !== payload))
            };
        }
        default:
            return state;
    }
}