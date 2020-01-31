export const SET_LUCKY_NUMBER = 'SET_LUCKY_NUMBER'
export const REQUESTED_JSON = 'REQUESTED_JSON'
export const SET_LOADING = 'SET_LOADING'
export const REQUESTED_JSON_SUCCEEDED = 'REQUESTED_JSON_SUCCEEDED'
export const REQUESTED_JSON_FAILED = 'REQUESTED_JSON_FAILED'

export const LUCKY_NUMBER = 200

// export const infoJSONurl = 'https://esi.evetech.net/dev/status/'
export const infoJSONurl = 'http://localhost:8000/content/fields.json'

export interface InfoJSON {
    [index: string]: string;
}

export const content = {
    author: 'Aliaksandr Lazarau',
    task: {
        title: 'FE/React Developer Technical Task',
        link: '',
    }
}

export type Content = typeof content