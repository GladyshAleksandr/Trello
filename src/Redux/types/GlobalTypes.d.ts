type columnsGetType = {
    id: number, columnTitle: string, columnId: number
}
type cardsGetType = {
    id: number, text: string, columnId: number, orders: number
}
type ResponseGetDataFromDBType = {
    columns: Array<columnsGetType>
    cards: Array<cardsGetType>
}
type CardsType =
    {
        id: number
        text: string
        columnId: number
        order: number
    }

type ColumnsTypes =
    {
        id: number
        columnId: number
        columnTitle: string
        cards: Array<CardsType>
    }

type failureType = {
    err: Error
}


type getAllDataSuccessType = {
    columns: Array<ColumnsTypes>
}

type addColumnStartType = {
    id: number
    columnTitle: string
    columnId: number
}
type addColumnSuccessType = {
    columnTitle: string
}



type addCardStartType = {
    id: number
    text: string
    columnId: number
    order: number
}
type addCardSuccessType = {
    card: CardsType
}



type updateCardPositionStartType = {
    columns: Array<ColumnsTypes>
}
type updateCardPositionSuccessType = updateCardPositionStartType



type updateColumnPositionStartType = {
    columns: Array<ColumnsTypes>
}
type updateColumnPositionSuccessType = updateColumnPositionStartType



type deleteColumnStartType = {
    columns: Array<ColumnsTypes>
}
type deleteColumnSuccessType = deleteColumnStartType



type deleteCardStartType = {
    columns: Array<ColumnsTypes>
}
type deleteCardSuccessType = deleteCardStartType



type renameCardStartType = {
    text: string
    columnId: number
    order: number
}
type renameCardSuccessType = renameCardStartType



type renameColumnStartType = {
    columnTitle: string
    columnId: number
}
type renameColumnSuccessType = renameColumnStartType
