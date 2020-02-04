import React from 'react'
import { connect } from 'react-redux'
import { content } from '../../redux/constant'


interface AppMessageProps {
    error: boolean
    loading: boolean
}

const AppMessage: React.FC<AppMessageProps> = (props) => {
    return (
        <div>
            {props.error && 
            <p>{content.errorMessage}</p>}
            {props.loading && 
            <p>{content.loadingMessage}</p>}
        </div>
    )
}

export default connect(state => state)(AppMessage)