import {
    REQUESTED_JSON,
    SET_LOADING,
    REQUESTED_JSON_SUCCEEDED,
    REQUESTED_JSON_FAILED,
    InfoJSON,
    SET_EDITOR_MOD,
    PUT_CONTENT_JSON
} from '../constant'

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

export const setEditorMode = (status: boolean) => ({
    type: SET_EDITOR_MOD,
    payload: status
} as const)

export const putContentJSON = (contentJSON) => ({
    type: PUT_CONTENT_JSON,
    payload: contentJSON
} as const)


