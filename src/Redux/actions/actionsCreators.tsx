import { GetDataFromStorageActionCreatorStartType, GetDataFromStorageActionCreatorSuccessType, GetDataFromStorageActionCreatorFailureType, AddColumnActionCreatorStartType, AddColumnActionCreatorSuccessType, AddColumnActionCreatorFailureType, AddCardActionCreatorStartType, AddCardActionCreatorSuccessType, AddCardActionCreatorFailureType, UpdateCardPositionActionCreatorStartType, UpdateCardPositionActionCreatorSuccessType, UpdateCardPositionActionCreatorFailureType, UpdateColumnPositionActionCreatorStartType, UpdateColumnPositionActionCreatorSuccessType, UpdateColumnPositionActionCreatorFailureType, DeleteColumnActionCreatorStartType, DeleteColumnActionCreatorSuccessType, DeleteColumnActionCreatorFailureType, DeleteCardActionCreatorStartType, DeleteCardActionCreatorSuccessType, DeleteCardActionCreatorFailureType, RenameCardActionCreatorStartType, RenameCardActionCreatorSuccessType, RenameCardActionCreatorFailureType, RenameColumnActionCreatorStartType, RenameColumnActionCreatorSuccessType, RenameColumnActionCreatorFailureType } from "Redux/types/actionsCreatorsTypes"
import { ActionTypes } from "../consts/constants"


export const actions = {
    getDataFromStorageActionCreatorStart: (): GetDataFromStorageActionCreatorStartType => ({
        type: ActionTypes.GET_DATA_FROM_STORAGE_START
    } as const),
    getDataFromStorageActionCreatorSuccess: (columns: Array<ColumnsTypes>): GetDataFromStorageActionCreatorSuccessType => ({
        type: ActionTypes.GET_DATA_FROM_STORAGE_SUCCESS, payload: { columns }
    } as const),
    getDataFromStorageActionCreatorFailure: (err: Error): GetDataFromStorageActionCreatorFailureType => ({
        type: ActionTypes.GET_DATA_FROM_STORAGE_FAILURE, payload: { err }
    } as const),




    addColumnActionCreatorStart: (id: number, columnTitle: string, columnId: number): AddColumnActionCreatorStartType => ({
        type: ActionTypes.ADD_COLUMN_START, payload: { id, columnTitle, columnId }
    } as const),
    addColumnActionCreatorSuccess: (columnTitle: string): AddColumnActionCreatorSuccessType => ({
        type: ActionTypes.ADD_COLUMN_SUCCESS, payload: { columnTitle }
    } as const),
    addColumnActionCreatorFailure: (err: Error): AddColumnActionCreatorFailureType => ({
        type: ActionTypes.ADD_COLUMN_FAILURE, payload: { err }
    } as const),


    addCardActionCreatorStart: (id: number, text: string, columnId: number, order: number): AddCardActionCreatorStartType => ({
        type: ActionTypes.ADD_CARD_START, payload: { id, text, columnId, order }
    } as const),
    addCardActionCreatorSuccess: (card: CardsType): AddCardActionCreatorSuccessType => ({
        type: ActionTypes.ADD_CARD_SUCCESS, payload: { card }
    } as const),
    addCardActionCreatorFailure: (err: Error): AddCardActionCreatorFailureType => ({
        type: ActionTypes.ADD_CARD_FAILURE, payload: { err }
    } as const),




    updateCardPositionActionCreatorStart: (columns: Array<ColumnsTypes>): UpdateCardPositionActionCreatorStartType => ({
        type: ActionTypes.UPDATE_CARD_POSITION_START, payload: { columns }
    } as const),

    updateCardPositionActionCreatorSuccess: (columns: Array<ColumnsTypes>): UpdateCardPositionActionCreatorSuccessType => ({
        type: ActionTypes.UPDATE_CARD_POSITION_SUCCESS, payload: { columns }
    } as const),
    updateCardPositionActionCreatorFailure: (err: Error): UpdateCardPositionActionCreatorFailureType => ({
        type: ActionTypes.UPDATE_CARD_POSITION_FAILURE, payload: { err }
    } as const),



    updateColumnPositionActionCreatorStart: (columns: Array<ColumnsTypes>): UpdateColumnPositionActionCreatorStartType => ({
        type: ActionTypes.UPDATE_COLUMN_POSITION_START, payload: { columns }
    } as const),
    updateColumnPositionActionCreatorSuccess: (columns: Array<ColumnsTypes>): UpdateColumnPositionActionCreatorSuccessType => ({
        type: ActionTypes.UPDATE_COLUMN_POSITION_SUCCESS, payload: { columns }
    } as const),
    updateColumnPositionActionCreatorFailure: (err: Error): UpdateColumnPositionActionCreatorFailureType => ({
        type: ActionTypes.UPDATE_COLUMN_POSITION_FAILURE, payload: { err }
    } as const),



    deleteColumnActionCreatorStart: (columns: Array<ColumnsTypes>): DeleteColumnActionCreatorStartType => ({
        type: ActionTypes.DELETE_COLUMN_START, payload: { columns }
    } as const),
    deleteColumnActionCreatorSuccess: (columns: Array<ColumnsTypes>): DeleteColumnActionCreatorSuccessType => ({
        type: ActionTypes.DELETE_COLUMN_SUCCESS, payload: { columns }
    } as const),
    deleteColumnActionCreatorFailure: (err: Error): DeleteColumnActionCreatorFailureType => ({
        type: ActionTypes.DELETE_COLUMN_FAILURE, payload: { err }
    } as const),


    deleteCardActionCreatorStart: (columns: Array<ColumnsTypes>): DeleteCardActionCreatorStartType => ({
        type: ActionTypes.DELETE_CARD_START, payload: { columns }
    } as const),
    deleteCardActionCreatorSuccess: (columns: Array<ColumnsTypes>): DeleteCardActionCreatorSuccessType => ({
        type: ActionTypes.DELETE_CARD_SUCESS, payload: { columns }
    } as const),
    deleteCardActionCreatorFailure: (err: Error): DeleteCardActionCreatorFailureType => ({
        type: ActionTypes.DELETE_CARD_FAILURE, payload: { err }
    } as const),



    renameCardActionCreatorStart: (text: string, columnId: number, order: number): RenameCardActionCreatorStartType => ({
        type: ActionTypes.RENAME_CARD_START, payload: { text, columnId, order }
    } as const),
    renameCardActionCreatorSuccess: (text: string, columnId: number, order: number): RenameCardActionCreatorSuccessType => ({
        type: ActionTypes.RENAME_CARD_SUCCESS, payload: { text, columnId, order }
    } as const),
    renameCardActionCreatorFailure: (err: Error): RenameCardActionCreatorFailureType => ({
        type: ActionTypes.RENAME_CARD_FAILURE, payload: { err }
    } as const),



    renameColumnActionCreatorStart: (columnTitle: string, columnId: number): RenameColumnActionCreatorStartType => ({
        type: ActionTypes.RENAME_COLUMN_START, payload: { columnTitle, columnId }
    } as const),
    renameColumnActionCreatorSuccess: (columnTitle: string, columnId: number): RenameColumnActionCreatorSuccessType => ({
        type: ActionTypes.RENAME_COLUMN_SUCCESS, payload: { columnTitle, columnId }
    } as const),
    renameColumnActionCreatorFailure: (err: Error): RenameColumnActionCreatorFailureType => ({
        type: ActionTypes.RENAME_COLUMN_FAILURE, payload: { err }
    } as const)
}
