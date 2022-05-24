import { ActionTypes } from "../consts/constants"
import { addCardActionCreatorFailureType, addCardActionCreatorStartType, addCardActionCreatorSuccessType, addColumnActionCreatorFailureType, addColumnActionCreatorStartType, addColumnActionCreatorSuccessType, deleteCardActionCreatorFailureType, deleteCardActionCreatorStartType, deleteCardActionCreatorSuccessType, deleteColumnActionCreatorFailureType, deleteColumnActionCreatorStartType, deleteColumnActionCreatorSuccessType, getDataFromStorageActionCreatorFailureType, getDataFromStorageActionCreatorStartType, getDataFromStorageActionCreatorSuccessType, renameCardActionCreatorFailureType, renameCardActionCreatorStartType, renameCardActionCreatorSuccessType, renameColumnActionCreatorFailureType, renameColumnActionCreatorStartType, renameColumnActionCreatorSuccessType, updateCardPositionActionCreatorFailureType, updateCardPositionActionCreatorStartType, updateCardPositionActionCreatorSuccessType, updateColumnPositionActionCreatorFailureType, updateColumnPositionActionCreatorStartType, updateColumnPositionActionCreatorSuccessType } from "../types/actionsCreatorsTypes"


export const actions = {
    getDataFromStorageActionCreatorStart: (): getDataFromStorageActionCreatorStartType => ({
        type: ActionTypes.GET_DATA_FROM_STORAGE_START
    } as const),
    getDataFromStorageActionCreatorSuccess: (columns: Array<ColumnsTypes>): getDataFromStorageActionCreatorSuccessType => ({
        type: ActionTypes.GET_DATA_FROM_STORAGE_SUCCESS, payload: { columns }
    } as const),
    getDataFromStorageActionCreatorFailure: (err: Error): getDataFromStorageActionCreatorFailureType => ({
        type: ActionTypes.GET_DATA_FROM_STORAGE_FAILURE, payload: { err }
    } as const),




    addColumnActionCreatorStart: (id: number, columnTitle: string, columnId: number): addColumnActionCreatorStartType => ({
        type: ActionTypes.ADD_COLUMN_START, payload: { id, columnTitle, columnId }
    } as const),
    addColumnActionCreatorSuccess: (columnTitle: string): addColumnActionCreatorSuccessType => ({
        type: ActionTypes.ADD_COLUMN_SUCCESS, payload: { columnTitle }
    } as const),
    addColumnActionCreatorFailure: (err: Error): addColumnActionCreatorFailureType => ({
        type: ActionTypes.ADD_COLUMN_FAILURE, payload: { err }
    } as const),


    addCardActionCreatorStart: (id: number, text: string, columnId: number, order: number): addCardActionCreatorStartType => ({
        type: ActionTypes.ADD_CARD_START, payload: { id, text, columnId, order }
    } as const),
    addCardActionCreatorSuccess: (card: CardsType): addCardActionCreatorSuccessType => ({
        type: ActionTypes.ADD_CARD_SUCCESS, payload: { card }
    } as const),
    addCardActionCreatorFailure: (err: Error): addCardActionCreatorFailureType => ({
        type: ActionTypes.ADD_CARD_FAILURE, payload: { err }
    } as const),




    updateCardPositionActionCreatorStart: (columns: Array<ColumnsTypes>): updateCardPositionActionCreatorStartType => ({
        type: ActionTypes.UPDATE_CARD_POSITION_START, payload: { columns }
    } as const),

    updateCardPositionActionCreatorSuccess: (columns: Array<ColumnsTypes>): updateCardPositionActionCreatorSuccessType => ({
        type: ActionTypes.UPDATE_CARD_POSITION_SUCCESS, payload: { columns }
    } as const),
    updateCardPositionActionCreatorFailure: (err: Error): updateCardPositionActionCreatorFailureType => ({
        type: ActionTypes.UPDATE_CARD_POSITION_FAILURE, payload: { err }
    } as const),



    updateColumnPositionActionCreatorStart: (columns: Array<ColumnsTypes>): updateColumnPositionActionCreatorStartType => ({
        type: ActionTypes.UPDATE_COLUMN_POSITION_START, payload: { columns }
    } as const),
    updateColumnPositionActionCreatorSuccess: (columns: Array<ColumnsTypes>): updateColumnPositionActionCreatorSuccessType => ({
        type: ActionTypes.UPDATE_COLUMN_POSITION_SUCCESS, payload: { columns }
    } as const),
    updateColumnPositionActionCreatorFailure: (err: Error): updateColumnPositionActionCreatorFailureType => ({
        type: ActionTypes.UPDATE_COLUMN_POSITION_FAILURE, payload: { err }
    } as const),



    deleteColumnActionCreatorStart: (columns: Array<ColumnsTypes>): deleteColumnActionCreatorStartType => ({
        type: ActionTypes.DELETE_COLUMN_START, payload: { columns }
    } as const),
    deleteColumnActionCreatorSuccess: (columns: Array<ColumnsTypes>): deleteColumnActionCreatorSuccessType => ({
        type: ActionTypes.DELETE_COLUMN_SUCCESS, payload: { columns }
    } as const),
    deleteColumnActionCreatorFailure: (err: Error): deleteColumnActionCreatorFailureType => ({
        type: ActionTypes.DELETE_COLUMN_FAILURE, payload: { err }
    } as const),


    deleteCardActionCreatorStart: (columns: Array<ColumnsTypes>): deleteCardActionCreatorStartType => ({
        type: ActionTypes.DELETE_CARD_START, payload: { columns }
    } as const),
    deleteCardActionCreatorSuccess: (columns: Array<ColumnsTypes>): deleteCardActionCreatorSuccessType => ({
        type: ActionTypes.DELETE_CARD_SUCESS, payload: { columns }
    } as const),
    deleteCardActionCreatorFailure: (err: Error): deleteCardActionCreatorFailureType => ({
        type: ActionTypes.DELETE_CARD_FAILURE, payload: { err }
    } as const),



    renameCardActionCreatorStart: (text: string, columnId: number, order: number): renameCardActionCreatorStartType => ({
        type: ActionTypes.RENAME_CARD_START, payload: { text, columnId, order }
    } as const),
    renameCardActionCreatorSuccess: (text: string, columnId: number, order: number): renameCardActionCreatorSuccessType => ({
        type: ActionTypes.RENAME_CARD_SUCCESS, payload: { text, columnId, order }
    } as const),
    renameCardActionCreatorFailure: (err: Error): renameCardActionCreatorFailureType => ({
        type: ActionTypes.RENAME_CARD_FAILURE, payload: { err }
    } as const),



    renameColumnActionCreatorStart: (columnTitle: string, columnId: number): renameColumnActionCreatorStartType => ({
        type: ActionTypes.RENAME_COLUMN_START, payload: { columnTitle, columnId }
    } as const),
    renameColumnActionCreatorSuccess: (columnTitle: string, columnId: number): renameColumnActionCreatorSuccessType => ({
        type: ActionTypes.RENAME_COLUMN_SUCCESS, payload: { columnTitle, columnId }
    } as const),
    renameColumnActionCreatorFailure: (err: Error): renameColumnActionCreatorFailureType => ({
        type: ActionTypes.RENAME_COLUMN_FAILURE, payload: { err }
    } as const)
}
