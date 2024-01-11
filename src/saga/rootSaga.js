import { all } from "redux-saga/effects";
import { watchDecrementAsync, watchIncrementAsync, watchMultiplicationAsync,watchDivisionAsync } from "./counterSaga";



export default function* rootSaga() {
  //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);

  yield all([watchDecrementAsync(), watchIncrementAsync(),watchMultiplicationAsync(),watchDivisionAsync()]);
  }