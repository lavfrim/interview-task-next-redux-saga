import React from 'react'
import { connect } from 'react-redux'
import { content } from '../../redux/constant'


interface AppMessageProps {
    error: boolean
    loading: boolean
}

const blockName = 'app-message'

const AppMessage: React.FC<AppMessageProps> = (props) => {
    return (
        <div className={blockName}>
            {props.error && 
            <p className={`${blockName}__error`}>{content.errorMessage}</p>}
            {props.loading && 
            <p className={`${blockName}__loading`}>{content.loadingMessage}</p>}
        </div>
    )
}

export default connect(state => state)(AppMessage)