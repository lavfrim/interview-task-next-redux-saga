export const SET_LUCKY_NUMBER = 'SET_LUCKY_NUMBER'
export const REQUESTED_JSON = 'REQUESTED_JSON'
export const SET_LOADING = 'SET_LOADING'
export const REQUESTED_JSON_SUCCEEDED = 'REQUESTED_JSON_SUCCEEDED'
export const REQUESTED_JSON_FAILED = 'REQUESTED_JSON_FAILED'
export const SET_EDITOR_MOD = 'SET_EDITOR_MOD'
export const PUT_CONTENT_JSON = 'PUT_CONTENT_JSON'

export const infoJSONurl = 'http://localhost:8000/content/fields.json'

export interface InfoJSON {
    [index: string]: { [index: string]: string }
}

export const content = {
    author: 'Aliaksandr Lazarau',
    task: {
        title: 'FE/React Developer Technical Task',
        link: '',
    },
    nav: {
        forUser: 'For user',
        forEditor: 'For editor'
    },
    category: ['AM', 'RT', 'ML', 'SX', 'MG'],
    price: ['low', 'medium', 'high'],
    textChangephrase: 'enter change text',
    editorModeMessage: 'To edit the contents of elements, press alt and click left mouse button on the element',
    applyChangeButton: 'Apply all changes',
    errorMessage: 'Something went wrong. Please try later',
    loadingMessage: 'Loading...'
}

export type Content = typeof content