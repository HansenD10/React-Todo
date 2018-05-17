import React from 'react'
import PropTypes from 'prop-types'
import DeleteButton from '../../../containers/DeleteButton';

const Todo = ({ id, onClick, completed, text }) => (
    <div className="row todo">
        <li 
            className="col-10"
            onClick={onClick}
            style={ {
                textDecoration: completed ? 'line-through' : 'none'
            } }
        >
        {text}
        </li>
        <DeleteButton id={id}/>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo