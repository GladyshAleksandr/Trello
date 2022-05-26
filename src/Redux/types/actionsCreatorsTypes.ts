import { ActionTypes } from "../consts/constants"

export type GetDataFromStorageActionCreatorStartType = {
    type: ActionTypes.GET_DATA_FROM_STORAGE_START
}
export type GetDataFromStorageActionCreatorSuccessType = {
    type: ActionTypes.GET_DATA_FROM_STORAGE_SUCCESS
    payload: Start_Success_Type.GetAllDataSuccessType
}
export type GetDataFromStorageActionCreatorFailureType = {
    type: ActionTypes.GET_DATA_FROM_STORAGE_FAILURE
    payload: FailureType
}



export type AddColumnActionCreatorStartType = {
    type: ActionTypes.ADD_COLUMN_START
    payload: Start_Success_Type.AddColumnStartType
}
export type AddColumnActionCreatorSuccessType = {
    type: ActionTypes.ADD_COLUMN_SUCCESS
    payload: Start_Success_Type.AddColumnSuccessType
}
export type AddColumnActionCreatorFailureType = {
    type: ActionTypes.ADD_COLUMN_FAILURE
    payload: FailureType
}



export type AddCardActionCreatorStartType = {
    type: ActionTypes.ADD_CARD_START
    payload: Start_Success_Type.AddCardStartType
}
export type AddCardActionCreatorSuccessType = {
    type: ActionTypes.ADD_CARD_SUCCESS
    payload: Start_Success_Type.AddCardSuccessType
}
export type AddCardActionCreatorFailureType = {
    type: ActionTypes.ADD_CARD_FAILURE
    payload: FailureType
}



export type UpdateCardPositionActionCreatorStartType = {
    type: ActionTypes.UPDATE_CARD_POSITION_START
    payload: Start_Success_Type.UpdateCardPositionStartType
}
export type UpdateCardPositionActionCreatorSuccessType = {
    type: ActionTypes.UPDATE_CARD_POSITION_SUCCESS
    payload: Start_Success_Type.UpdateCardPositionSuccessType
}
export type UpdateCardPositionActionCreatorFailureType = {
    type: ActionTypes.UPDATE_CARD_POSITION_FAILURE
    payload: FailureType
}



export type UpdateColumnPositionActionCreatorStartType = {
    type: ActionTypes.UPDATE_COLUMN_POSITION_START
    payload: Start_Success_Type.UpdateColumnPositionStartType
}
export type UpdateColumnPositionActionCreatorSuccessType = {
    type: ActionTypes.UPDATE_COLUMN_POSITION_SUCCESS
    payload: Start_Success_Type.UpdateColumnPositionSuccessType
}
export type UpdateColumnPositionActionCreatorFailureType = {
    type: ActionTypes.UPDATE_COLUMN_POSITION_FAILURE
    payload: FailureType
}


export type DeleteColumnActionCreatorStartType = {
    type: ActionTypes.DELETE_COLUMN_START,
    payload: Start_Success_Type.DeleteColumnStartType
}
export type DeleteColumnActionCreatorSuccessType = {
    type: ActionTypes.DELETE_COLUMN_SUCCESS,
    payload: Start_Success_Type.DeleteColumnSuccessType
}
export type DeleteColumnActionCreatorFailureType = {
    type: ActionTypes.DELETE_COLUMN_FAILURE,
    payload: FailureType
}



export type DeleteCardActionCreatorStartType = {
    type: ActionTypes.DELETE_CARD_START
    payload: Start_Success_Type.DeleteCardStartType
}
export type DeleteCardActionCreatorSuccessType = {
    type: ActionTypes.DELETE_CARD_SUCESS
    payload: Start_Success_Type.DeleteCardSuccessType
}
export type DeleteCardActionCreatorFailureType = {
    type: ActionTypes.DELETE_CARD_FAILURE
    payload: FailureType

}



export type RenameCardActionCreatorStartType = {
    type: ActionTypes.RENAME_CARD_START
    payload: Start_Success_Type.RenameCardStartType
}
export type RenameCardActionCreatorSuccessType = {
    type: ActionTypes.RENAME_CARD_SUCCESS
    payload: Start_Success_Type.RenameCardSuccessType
}
export type RenameCardActionCreatorFailureType = {
    type: ActionTypes.RENAME_CARD_FAILURE
    payload: FailureType
}



export type RenameColumnActionCreatorStartType = {
    type: ActionTypes.RENAME_COLUMN_START,
    payload: Start_Success_Type.RenameColumnStartType
}
export type RenameColumnActionCreatorSuccessType = {
    type: ActionTypes.RENAME_COLUMN_SUCCESS,
    payload: Start_Success_Type.RenameColumnSuccessType
}

export type RenameColumnActionCreatorFailureType = {
    type: ActionTypes.RENAME_COLUMN_FAILURE,
    payload: FailureType
}


export type UnionOfActionsCreatorsType =
    GetDataFromStorageActionCreatorStartType
    |
    GetDataFromStorageActionCreatorSuccessType
    |
    GetDataFromStorageActionCreatorFailureType
    |
    AddColumnActionCreatorStartType
    |
    AddColumnActionCreatorSuccessType
    |
    AddColumnActionCreatorFailureType
    |
    AddCardActionCreatorStartType
    |
    AddCardActionCreatorSuccessType
    |
    AddCardActionCreatorFailureType
    |
    UpdateCardPositionActionCreatorStartType
    |
    UpdateCardPositionActionCreatorSuccessType
    |
    UpdateCardPositionActionCreatorFailureType
    |
    UpdateColumnPositionActionCreatorStartType
    |
    UpdateColumnPositionActionCreatorSuccessType
    |
    UpdateColumnPositionActionCreatorFailureType
    |
    DeleteColumnActionCreatorStartType
    |
    DeleteColumnActionCreatorSuccessType
    |
    DeleteColumnActionCreatorFailureType
    |
    DeleteCardActionCreatorStartType
    |
    DeleteCardActionCreatorSuccessType
    |
    DeleteCardActionCreatorFailureType
    |
    RenameCardActionCreatorStartType
    |
    RenameCardActionCreatorSuccessType
    |
    RenameCardActionCreatorFailureType
    |
    RenameColumnActionCreatorStartType
    |
    RenameColumnActionCreatorSuccessType
    |
    RenameColumnActionCreatorFailureType



