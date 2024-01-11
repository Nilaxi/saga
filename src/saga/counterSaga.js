
import { put, takeEvery, delay, takeLatest } from 'redux-saga/effects'
import { DEC, INC,MUL,DIV } from "../action/counteraction"


export function* incrementAsync() {
    yield delay(1000)
    yield put(INC())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchIncrementAsync() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync)
  }

  export function* decrementAsync() {
    yield delay(1000)
    yield put(DEC())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync)
  }
  export function* multiplicationAsync() {
    yield delay(1000)
    yield put(MUL())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchMultiplicationAsync() {
    yield takeEvery('MULTIPLE_ASYNC',multiplicationAsync )
  }
  export function* divisionAsync() {
    yield delay(1000)
    yield put(DIV())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchDivisionAsync() {
    yield takeEvery('DIVISION_ASYNC',divisionAsync )
  }



  