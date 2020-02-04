import * as actions from '../action'
import { InfernalValueTypes } from '../utils'
import {
    REQUESTED_JSON,
    SET_LOADING,
    REQUESTED_JSON_SUCCEEDED,
    REQUESTED_JSON_FAILED,
    InfoJSON,
    SET_EDITOR_MOD,
    PUT_CONTENT_JSON
} from '../constant'


export type Action = ReturnType<InfernalValueTypes<typeof actions>>

export interface ReduxState {
    infoJSON: InfoJSON
    loading: boolean
    error: boolean
    editorMode: boolean
}

const initialState = {
    infoJSON: {},
    loading: false,
    error: false,
    editorMode: false
}

function rootReducer(state = initialState, action: Action): ReduxState {
    switch (action.type) {
        case SET_LOADING:
            return ({
                ...state,
                loading: true,
                error: action.payload,
            })
        case REQUESTED_JSON_SUCCEEDED:
            return {
                ...state,
                infoJSON: action.payload,
                loading: false,
                error: false,
            }
        case REQUESTED_JSON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SET_EDITOR_MOD:
            return {
                ...state,
                editorMode: action.payload,
            }
        case PUT_CONTENT_JSON:
            return {
                ...state,
                infoJSON: action.payload,
            }    
        default:
            return state
    }
}

export default rootReducer
  