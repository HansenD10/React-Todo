import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { removeTodo } from '../actions'

const DeleteButton = ({ dispatch, id }) => {

    return (
        <p 
        className="removeBtn col-2"
        onClick={e => {
            dispatch(removeTodo(id))
        }}
        >X</p>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired
}

export default connect()(DeleteButton)