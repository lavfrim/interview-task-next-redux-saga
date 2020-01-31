import {
    SET_LUCKY_NUMBER,
    REQUESTED_JSON,
    SET_LOADING,
    REQUESTED_JSON_SUCCEEDED,
    REQUESTED_JSON_FAILED,
    InfoJSON
} from '../constant'


export const seTLuckyNumber = (newLuckyNumber: number) => ({
    type: SET_LUCKY_NUMBER,
    payload: newLuckyNumber
} as const)

export const getInfoJSON = () => ({
    type: REQUESTED_JSON,
    payload: {}
} as const)

export const setLoding = (status: boolean) => ({
    type: SET_LOADING,
    payload: status
} as const)

export const setInfoJSON = (infoJSON: InfoJSON) => ({
    type: REQUESTED_JSON_SUCCEEDED,
    payload: infoJSON
} as const)

export const setError = (status: boolean) => ({
    type: REQUESTED_JSON_FAILED,
    payload: status
} as const)
