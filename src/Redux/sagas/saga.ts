import { actions } from './../actions/actionsCreators';
import { take } from 'redux-saga/effects'
export function* workerSaga() {

}

export function* watchSaga() {
    while (true) {
        yield take(actions.addCardActionCreator)
        console.log('saga catch action')
    }
}

export default function* rootSaga() {
    yield watchSaga();
    console.log('Saga ready')
}