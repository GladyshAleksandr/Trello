import { ActionTypes } from "../consts/constants"

export type getDataFromStorageActionCreatorStartType = {
    type: ActionTypes.GET_DATA_FROM_STORAGE_START
}
export type getDataFromStorageActionCreatorSuccessType = {
    type: ActionTypes.GET_DATA_FROM_STORAGE_SUCCESS
    payload: getAllDataSuccessType
}
export type getDataFromStorageActionCreatorFailureType = {
    type: ActionTypes.GET_DATA_FROM_STORAGE_FAILURE
    payload: failureType
}



export type addColumnActionCreatorStartType = {
    type: ActionTypes.ADD_COLUMN_START
    payload: addColumnStartType
}
export type addColumnActionCreatorSuccessType = {
    type: ActionTypes.ADD_COLUMN_SUCCESS
    payload: addColumnSuccessType
}
export type addColumnActionCreatorFailureType = {
    type: ActionTypes.ADD_COLUMN_FAILURE
    payload: failureType
}



export type addCardActionCreatorStartType = {
    type: ActionTypes.ADD_CARD_START
    payload: addCardStartType
}
export type addCardActionCreatorSuccessType = {
    type: ActionTypes.ADD_CARD_SUCCESS
    payload: addCardSuccessType
}
export type addCardActionCreatorFailureType = {
    type: ActionTypes.ADD_CARD_FAILURE
    payload: failureType
}



export type updateCardPositionActionCreatorStartType = {
    type: ActionTypes.UPDATE_CARD_POSITION_START
    payload: updateCardPositionStartType
}
export type updateCardPositionActionCreatorSuccessType = {
    type: ActionTypes.UPDATE_CARD_POSITION_SUCCESS
    payload: updateCardPositionSuccessType
}
export type updateCardPositionActionCreatorFailureType = {
    type: ActionTypes.UPDATE_CARD_POSITION_FAILURE
    payload: failureType
}



export type updateColumnPositionActionCreatorStartType = {
    type: ActionTypes.UPDATE_COLUMN_POSITION_START
    payload: updateColumnPositionStartType
}
export type updateColumnPositionActionCreatorSuccessType = {
    type: ActionTypes.UPDATE_COLUMN_POSITION_SUCCESS
    payload: updateColumnPositionSuccessType
}
export type updateColumnPositionActionCreatorFailureType = {
    type: ActionTypes.UPDATE_COLUMN_POSITION_FAILURE
    payload: failureType
}


export type deleteColumnActionCreatorStartType = {
    type: ActionTypes.DELETE_COLUMN_START,
    payload: deleteColumnStartType
}
export type deleteColumnActionCreatorSuccessType = {
    type: ActionTypes.DELETE_COLUMN_SUCCESS,
    payload: deleteColumnSuccessType
}
export type deleteColumnActionCreatorFailureType = {
    type: ActionTypes.DELETE_COLUMN_FAILURE,
    payload: failureType
}



export type deleteCardActionCreatorStartType = {
    type: ActionTypes.DELETE_CARD_START
    payload: deleteCardStartType
}
export type deleteCardActionCreatorSuccessType = {
    type: ActionTypes.DELETE_CARD_SUCESS
    payload: deleteCardSuccessType
}
export type deleteCardActionCreatorFailureType = {
    type: ActionTypes.DELETE_CARD_FAILURE
    payload: failureType

}



export type renameCardActionCreatorStartType = {
    type: ActionTypes.RENAME_CARD_START
    payload: renameCardStartType
}
export type renameCardActionCreatorSuccessType = {
    type: ActionTypes.RENAME_CARD_SUCCESS
    payload: renameCardSuccessType
}
export type renameCardActionCreatorFailureType = {
    type: ActionTypes.RENAME_CARD_FAILURE
    payload: failureType
}



export type renameColumnActionCreatorStartType = {
    type: ActionTypes.RENAME_COLUMN_START,
    payload: renameColumnStartType
}
export type renameColumnActionCreatorSuccessType = {
    type: ActionTypes.RENAME_COLUMN_SUCCESS,
    payload: renameColumnSuccessType
}

export type renameColumnActionCreatorFailureType = {
    type: ActionTypes.RENAME_COLUMN_FAILURE,
    payload: failureType
}


export type UnionOfActionsCreatorsType =
    getDataFromStorageActionCreatorStartType
    |
    getDataFromStorageActionCreatorSuccessType
    |
    getDataFromStorageActionCreatorFailureType
    |
    addColumnActionCreatorStartType
    |
    addColumnActionCreatorSuccessType
    |
    addColumnActionCreatorFailureType
    |
    addCardActionCreatorStartType
    |
    addCardActionCreatorSuccessType
    |
    addCardActionCreatorFailureType
    |
    updateCardPositionActionCreatorStartType
    |
    updateCardPositionActionCreatorSuccessType
    |
    updateCardPositionActionCreatorFailureType
    |
    updateColumnPositionActionCreatorStartType
    |
    updateColumnPositionActionCreatorSuccessType
    |
    updateColumnPositionActionCreatorFailureType
    |
    deleteColumnActionCreatorStartType
    |
    deleteColumnActionCreatorSuccessType
    |
    deleteColumnActionCreatorFailureType
    |
    deleteCardActionCreatorStartType
    |
    deleteCardActionCreatorSuccessType
    |
    deleteCardActionCreatorFailureType
    |
    renameCardActionCreatorStartType
    |
    renameCardActionCreatorSuccessType
    |
    renameCardActionCreatorFailureType
    |
    renameColumnActionCreatorStartType
    |
    renameColumnActionCreatorSuccessType
    |
    renameColumnActionCreatorFailureType



