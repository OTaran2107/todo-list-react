import { connect } from 'react-redux'
import { addToDo, updateToDo, deleteToDo, toggleToDo } from '../../store/actions'
import { bindActionCreators } from 'redux'
import ToDoList from './ToDoList'

function mapStateToProps(state) {
    return {
        toDoList: state.toDoList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: bindActionCreators(addToDo, dispatch),
        updateToDo: bindActionCreators(updateToDo, dispatch),
        deleteToDo: bindActionCreators(deleteToDo, dispatch),
        toggleToDo: bindActionCreators(toggleToDo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)