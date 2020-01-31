import * as actions from '../action'
import { InfernalValueTypes } from '../utils'
import {
    SET_LUCKY_NUMBER,
    REQUESTED_JSON,
    SET_LOADING,
    REQUESTED_JSON_SUCCEEDED,
    REQUESTED_JSON_FAILED,
    InfoJSON,
} from '../constant'


export type Action = ReturnType<InfernalValueTypes<typeof actions>>

export interface ReduxState {
    luckyNumber?: number
    infoJSON: InfoJSON
    loading: boolean,
    error: boolean,
}

const initialState = {
    luckyNumber: 12,

    infoJSON: {},
    loading: false,
    error: false,
}

function rootReducer(state = initialState, action: Action): ReduxState {
    switch (action.type) {
        case SET_LUCKY_NUMBER:
            return ({...state, luckyNumber: action.payload})

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
        };
        case REQUESTED_JSON_FAILED:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
            return state
    }
}

export default rootReducer
  