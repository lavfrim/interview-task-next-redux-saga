import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

interface RootStore extends ReturnType<typeof createStore> {
  sagaTask?: Task
}

function configureStore(preloadedState, {isServer, req = null}) {
  const sagaMiddleware = createSagaMiddleware()
  const store: RootStore = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware),
  );

  if (req || !isServer) {
    
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
