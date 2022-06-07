type ColumnsGetType = {
    id: number, columnTitle: string, columnId: number
}
type CardsGetType = {
    id: number, text: string, columnId: number, _order: number
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
        _order: number
    }

type ColumnsTypes =
    {
        id: number
        columnId: number
        columnTitle: string
        cards: Array<CardsType>
    }

type FailureType = {
    err: Error
}

namespace Start_Success_Type {


    type GetAllDataSuccessType = {
        columns: Array<ColumnsTypes>
    }

    type AddColumnStartType = {
        id: number
        columnTitle: string
        columnId: number
    }
    type AddColumnSuccessType = {
        id: number
        columnTitle: string
    }



    type AddCardStartType = {
        id: number
        text: string
        columnId: number
        _order: number
    }

    type AddCardSuccessType = {
        card: CardsType
    }


    type UpdateCardPositionStartType = {
        columns: Array<ColumnsTypes>
    }
    type UpdateCardPositionSuccessType = UpdateCardPositionStartType



    type UpdateColumnPositionStartType = {
        columns: Array<ColumnsTypes>
    }
    type UpdateColumnPositionSuccessType = UpdateColumnPositionStartType



    type DeleteColumnStartType = {
        columns: Array<ColumnsTypes>
    }
    type DeleteColumnSuccessType = DeleteColumnStartType



    type DeleteCardStartType = {
        columns: Array<ColumnsTypes>
    }
    type DeleteCardSuccessType = DeleteCardStartType



    type RenameCardStartType = {
        text: string
        id: number
        /*  columnId: number
         _order: number */
    }
    type RenameCardSuccessType = RenameCardStartType



    type RenameColumnStartType = {
        columnTitle: string
        columnId: number
    }
    type RenameColumnSuccessType = RenameColumnStartType
}