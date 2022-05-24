import { addCardActionCreatorStartType, deleteCardActionCreatorStartType, deleteColumnActionCreatorStartType, renameCardActionCreatorStartType, renameColumnActionCreatorStartType, updateColumnPositionActionCreatorStartType, updateCardPositionActionCreatorStartType, addColumnActionCreatorStartType } from '../types/actionsCreatorsTypes';
import { actions } from './../actions/actionsCreators';
import { api } from '../service/api';
import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../consts/constants';
import { AxiosResponse } from 'axios';
import { convertDataFromDbToColumnsTypeData } from '../utils/utils';

async function getDataFromDB() {
    const req: AxiosResponse = await api.getDataFromStore()
    return req
}

function* workerGetDataFromStorage() {
    try {
        const req: AxiosResponse = yield call(getDataFromDB)
        let data = convertDataFromDbToColumnsTypeData(req.data)
        yield put(actions.getDataFromStorageActionCreatorSuccess(data as unknown as Array<ColumnsTypes>))
    } catch (err) {
        yield put(actions.getDataFromStorageActionCreatorFailure(err as Error))
    }

}



async function addCardToDB({ id, text, columnId, order }: addCardStartType) {
    const req: AxiosResponse = await api.postAddCard(id, text, columnId, order)
    return req.data
}

function* workerSagaAddCard({ payload: { id, text, columnId, order } }: addCardActionCreatorStartType) {
    try {
        const data: CardsType = yield call(addCardToDB, { id, text, columnId, order })
        yield put(actions.addCardActionCreatorSuccess(data))
    } catch (error) {
        yield put(actions.addColumnActionCreatorFailure(error as Error))
    }
}



async function addColumnToDB({ columnTitle, columnId }: addColumnStartType) {
    const req: AxiosResponse = await api.postAddColumn(columnTitle, columnId)
    return req
}

function* workerSagaAddColumn({ payload: { id, columnTitle, columnId } }: addColumnActionCreatorStartType) {
    try {
        yield call(addColumnToDB, { id, columnTitle, columnId })
        yield put(actions.addColumnActionCreatorSuccess(columnTitle))
    } catch (error) {
        yield put(actions.addColumnActionCreatorFailure(error as Error))
    }

}



async function moveColumnToDB({ columns }: updateColumnPositionStartType) {
    let req: AxiosResponse = await api.postMoveColumn(columns)
    return req

}

function* workerSagamoveColumn({ payload: { columns } }: updateColumnPositionActionCreatorStartType) {
    try {
        yield call(moveColumnToDB, { columns })
        yield put(actions.updateColumnPositionActionCreatorSuccess(columns))
    }
    catch (err) {
        yield put(actions.updateColumnPositionActionCreatorFailure(err as Error))
    }
}



async function moveCardToDB({ columns }: updateCardPositionStartType) {
    const req: AxiosResponse = await api.postMoveCard(columns)
    return req

}

function* workerSagaMoveCard({ payload: { columns } }: updateCardPositionActionCreatorStartType) {
    try {
        yield call(moveCardToDB, { columns })
        yield put(actions.updateCardPositionActionCreatorSuccess(columns))
    } catch (error) {
        yield put(actions.updateCardPositionActionCreatorFailure(error as Error))
    }
}



async function deleteColumnToDB({ columns }: deleteColumnStartType) {
    const req: AxiosResponse = await api.deleteColumn(columns)
    return req
}

function* workerSagaDeleteColumn({ payload: { columns } }: deleteColumnActionCreatorStartType) {
    try {
        yield call(deleteColumnToDB, { columns })
        yield put(actions.deleteColumnActionCreatorSuccess(columns))
    } catch (error) {
        yield put(actions.deleteColumnActionCreatorFailure(error as Error))
    }
}



async function deleteCardToDB({ columns }: deleteCardStartType) {
    const req: AxiosResponse = await api.deleteCard(columns)
    return req
}

function* workerSagaDeleteCard({ payload: { columns } }: deleteCardActionCreatorStartType) {
    try {
        yield call(deleteCardToDB, { columns })
        yield put(actions.deleteCardActionCreatorSuccess(columns))
    } catch (error) {
        yield put(actions.deleteCardActionCreatorFailure(error as Error))
    }
}



async function renameColumnToDB({ columnTitle, columnId }: renameColumnStartType) {
    const req: AxiosResponse = await api.postRenameColumn(columnTitle, columnId)
    return req
}

function* workerSagaRenameColumn({ payload: { columnTitle, columnId } }: renameColumnActionCreatorStartType) {
    try {
        yield call(renameColumnToDB, { columnTitle, columnId })
        yield put(actions.renameColumnActionCreatorSuccess(columnTitle, columnId))
    } catch (error) {
        yield put(actions.renameColumnActionCreatorFailure(error as Error))
    }
}



async function renameCardToDB({ text, columnId, order }: renameCardStartType) {
    const req: AxiosResponse = await api.postRenameCard(text, columnId, order)
    return req
}

function* workerSagaRenameCard({ payload: { text, columnId, order } }: renameCardActionCreatorStartType) {
    try {
        yield call(renameCardToDB, { text, columnId, order })
        yield put(actions.renameCardActionCreatorSuccess(text, columnId, order))
    } catch (error) {
        yield put(actions.renameCardActionCreatorFailure(error as Error))
    }

}



export default function* rootSaga() {
    yield takeEvery(ActionTypes.GET_DATA_FROM_STORAGE_START, workerGetDataFromStorage)
    yield takeEvery(ActionTypes.ADD_CARD_START, workerSagaAddCard)
    yield takeEvery(ActionTypes.ADD_COLUMN_START, workerSagaAddColumn)
    yield takeEvery(ActionTypes.UPDATE_COLUMN_POSITION_START, workerSagamoveColumn)
    yield takeEvery(ActionTypes.UPDATE_CARD_POSITION_START, workerSagaMoveCard)
    yield takeEvery(ActionTypes.DELETE_COLUMN_START, workerSagaDeleteColumn)
    yield takeEvery(ActionTypes.DELETE_CARD_START, workerSagaDeleteCard)
    yield takeEvery(ActionTypes.RENAME_COLUMN_START, workerSagaRenameColumn)
    yield takeEvery(ActionTypes.RENAME_CARD_START, workerSagaRenameCard)
}


