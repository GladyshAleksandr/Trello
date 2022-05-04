import { ADD_COLUMN, ADD_CARD, UPDATE_CARD_POSITION, UPDATE_COLUMN_POSITION } from "../consts/constants"
import { ColumnsTypes } from "../store/store"


export const actions = {
    addColumnActionCreator: (title: string) => ({
        type: ADD_COLUMN, title
    } as const),
    addCardActionCreator: (text: string, id: number) => ({
        type: ADD_CARD, text, id
    } as const),
    updateCardPositionActionCreator: (obj: ColumnsTypes) => ({
        type: UPDATE_CARD_POSITION, obj
    } as const),
    updateColumnPositionActionCreator: (arr: Array<ColumnsTypes>) => ({
        type: UPDATE_COLUMN_POSITION, arr
    } as const)
}