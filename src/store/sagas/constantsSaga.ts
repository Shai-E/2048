// import {call, put, takeEvery} from 'redux-saga/effects';

// import {
//   getSuccessAction,
//   getFailureAction,
// } from '../reducers/booksReducer';

// const URL = 'https://example.com';

// function* fetchDataExample() {
//   try {
//     const response: Response = yield call(() => fetch(URL)); // fetch data
//     const data: unknown = yield call(() => response.json()); // parse data
//     yield put(getSuccessAction(data)); // dispatch success action
//   } catch (e) {
//     yield put(getFailureAction()); // dispatch failure action
//   }
// }


// export function* constantsSaga() {
//   yield takeEvery('<reducer-name>/<reducer-action>', fetchDataExample);
// }
