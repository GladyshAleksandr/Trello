import { ADD_COLUMN } from "../consts/constants"


export const actions = {
    addColumnActionsCreator: (title: string) => ({
        type: ADD_COLUMN, title
    })
}