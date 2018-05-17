import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input 

    return (
        <div>
            <input type='text'
            className='form-control todoInput'
            placeholder='What needs to be done?'
            ref={node => input = node} 
            onKeyPress={e => {
                if (e.key === "Enter") {
                    if(!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }
                return
            }}/>
        </div>
    )
}

export default connect()(AddTodo)