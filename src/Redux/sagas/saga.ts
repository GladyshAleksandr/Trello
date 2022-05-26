import { actions } from './../actions/actionsCreators';
import { api } from '../service/api';
import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../consts/constants';
import { AxiosResponse } from 'axios';
import { convertDataFromDbToColumnsTypeData } from '../utils/utils';
import { AddCardActionCreatorStartType, AddColumnActionCreatorStartType, DeleteCardActionCreatorStartType, DeleteColumnActionCreatorStartType, RenameCardActionCreatorStartType, RenameColumnActionCreatorStartType, UpdateCardPositionActionCreatorStartType, UpdateColumnPositionActionCreatorStartType } from 'Redux/types/actionsCreatorsTypes';

async function getDataFromDB() {
    const res: AxiosResponse = await api.getDataFromStore()
    return res
}

function* workerGetDataFromStorage() {
    try {
        const res: AxiosResponse = yield call(getDataFromDB)
        const data: Array<ColumnsTypes> = convertDataFromDbToColumnsTypeData(res.data)
        yield put(actions.getDataFromStorageActionCreatorSuccess(data))
    } catch (err) {
        yield put(actions.getDataFromStorageActionCreatorFailure(err as Error))
    }

}



async function addCardToDB({ id, text, columnId, order }: Start_Success_Type.AddCardStartType) {
    const res: AxiosResponse = await api.postAddCard(id, text, columnId, order)
    return res.data
}

function* workerSagaAddCard({ payload: { id, text, columnId, order } }: AddCardActionCreatorStartType) {
    try {
        const data: CardsType = yield call(addCardToDB, { id, text, columnId, order })
        yield put(actions.addCardActionCreatorSuccess(data))
    } catch (error) {
        yield put(actions.addColumnActionCreatorFailure(error as Error))
    }
}



async function addColumnToDB({ columnTitle, columnId }: Start_Success_Type.AddColumnStartType) {
    const res: AxiosResponse = await api.postAddColumn(columnTitle, columnId)
    return res
}

function* workerSagaAddColumn({ payload: { id, columnTitle, columnId } }: AddColumnActionCreatorStartType) {
    try {
        yield call(addColumnToDB, { id, columnTitle, columnId })
        yield put(actions.addColumnActionCreatorSuccess(columnTitle))
    } catch (error) {
        yield put(actions.addColumnActionCreatorFailure(error as Error))
    }

}



async function moveColumnToDB({ columns }: Start_Success_Type.UpdateColumnPositionStartType) {
    let res: AxiosResponse = await api.postMoveColumn(columns)
    return res

}

function* workerSagamoveColumn({ payload: { columns } }: UpdateColumnPositionActionCreatorStartType) {
    try {
        yield call(moveColumnToDB, { columns })
        yield put(actions.updateColumnPositionActionCreatorSuccess(columns))
    }
    catch (err) {
        yield put(actions.updateColumnPositionActionCreatorFailure(err as Error))
    }
}



async function moveCardToDB({ columns }: Start_Success_Type.UpdateCardPositionStartType) {
    const res: AxiosResponse = await api.postMoveCard(columns)
    return res

}

function* workerSagaMoveCard({ payload: { columns } }: UpdateCardPositionActionCreatorStartType) {
    try {
        yield call(moveCardToDB, { columns })
        yield put(actions.updateCardPositionActionCreatorSuccess(columns))
    } catch (error) {
        yield put(actions.updateCardPositionActionCreatorFailure(error as Error))
    }
}



async function deleteColumnToDB({ columns }: Start_Success_Type.DeleteColumnStartType) {
    const res: AxiosResponse = await api.deleteColumn(columns)
    return res
}

function* workerSagaDeleteColumn({ payload: { columns } }: DeleteColumnActionCreatorStartType) {
    try {
        yield call(deleteColumnToDB, { columns })
        yield put(actions.deleteColumnActionCreatorSuccess(columns))
    } catch (error) {
        yield put(actions.deleteColumnActionCreatorFailure(error as Error))
    }
}



async function deleteCardToDB({ columns }: Start_Success_Type.DeleteCardStartType) {
    const res: AxiosResponse = await api.deleteCard(columns)
    return res
}

function* workerSagaDeleteCard({ payload: { columns } }: DeleteCardActionCreatorStartType) {
    try {
        yield call(deleteCardToDB, { columns })
        yield put(actions.deleteCardActionCreatorSuccess(columns))
    } catch (error) {
        yield put(actions.deleteCardActionCreatorFailure(error as Error))
    }
}



async function renameColumnToDB({ columnTitle, columnId }: Start_Success_Type.RenameColumnStartType) {
    const res: AxiosResponse = await api.postRenameColumn(columnTitle, columnId)
    return res
}

function* workerSagaRenameColumn({ payload: { columnTitle, columnId } }: RenameColumnActionCreatorStartType) {
    try {
        yield call(renameColumnToDB, { columnTitle, columnId })
        yield put(actions.renameColumnActionCreatorSuccess(columnTitle, columnId))
    } catch (error) {
        yield put(actions.renameColumnActionCreatorFailure(error as Error))
    }
}



async function renameCardToDB({ text, columnId, order }: Start_Success_Type.RenameCardStartType) {
    const res: AxiosResponse = await api.postRenameCard(text, columnId, order)
    return res
}

function* workerSagaRenameCard({ payload: { text, columnId, order } }: RenameCardActionCreatorStartType) {
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


