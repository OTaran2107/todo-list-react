import { connect } from 'react-redux'
import { addToDo, updateToDo, deleteToDo, toggleToDo } from '../../store/actions'
import ToDoList from './ToDoList'

function mapStateToProps(state) {
    return {
        toDoList: state.toDoList
    };
}

const mapDispatchToProps = {
    addToDo,
    updateToDo,
    deleteToDo,
    toggleToDo
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)