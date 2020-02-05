import { call, put, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-unfetch'

import {
  REQUESTED_JSON,
  PUT_CONTENT_JSON,
  infoJSONurl,
} from '../constant'
import {
  setLoding,
  setInfoJSON,
  setError,
} from '../action'


function* getAsyncInfoJSON() {
  try {
    yield put(setLoding(true))

    const data = yield call(() => {
        return fetch(infoJSONurl).then(res => res.json())
      }
    )
    
    yield put(setInfoJSON(data))
  } catch (error) {
    yield put(setError(true))
  }
}

function* putContentJSON(action) {
  fetch(infoJSONurl, {
    method: 'PUT',
    headers: {
        'Content-Type': 'text/plain',
    },
    body: JSON.stringify(action.payload),
  })
}

function* rootSaga() {
  yield takeEvery(REQUESTED_JSON, getAsyncInfoJSON)
  yield takeEvery(PUT_CONTENT_JSON, putContentJSON)
}

export default rootSaga
