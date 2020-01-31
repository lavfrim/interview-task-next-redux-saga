import { call, put, takeEvery } from 'redux-saga/effects'
import {
  REQUESTED_JSON,
  infoJSONurl,
} from '../constant'
import {
  setLoding,
  setInfoJSON,
  setError,
} from '../action'


function* getAsyncInfoJSON() {
  try {
    yield put(setLoding(true));

    const data = yield call(() => {
      return fetch(infoJSONurl)
              .then(res => res.json())
      }
    );

    yield put(setInfoJSON(data));
  } catch (error) {
      yield put(setError(true));
  }
}

function* rootSaga() {
  yield takeEvery(REQUESTED_JSON, getAsyncInfoJSON)
}

export default rootSaga
