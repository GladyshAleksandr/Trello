import { take } from 'redux-saga/effects'
export function* workerSaga() {

}

export function* watchSaga() {

}

export default function* rootSaga() {
    yield watchSaga();
    console.log('Saga ready')
}