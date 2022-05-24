export function replaceAt(index: number, replacement: string, str: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export function convertDataFromDbToColumnsTypeData(data: ResponseGetDataFromDBType) {

    let objCols: Array<columnsGetType> = []
    objCols = data.columns
    let arrOfCards: Array<cardsGetType> = data.cards

    let obj: any = objCols.map((current: any) => {
        let ColumnsTypes = {
            id: undefined,
            columnId: undefined,
            columnTitle: undefined,
            cards: []
        }    /*  = Object.assign({}, current) */
        ColumnsTypes.id = current.id
        ColumnsTypes.columnId = current.columnId
        ColumnsTypes.columnTitle = current.columnTitle
        ColumnsTypes.cards = []
        return ColumnsTypes
    })
    /* debugger */
    if (arrOfCards.length > 0) {
        for (let i = 0; i < obj.length; ++i) {
            for (let j = 0; j < arrOfCards.length; ++j) {
                let cardsType = {
                    id: 0,
                    text: '',
                    columnId: 0,
                    order: 0
                }
                cardsType.id = arrOfCards[j].id
                cardsType.text = arrOfCards[j].text
                cardsType.columnId = arrOfCards[j].columnId
                cardsType.order = arrOfCards[j].orders

                if (obj[i].columnId === cardsType.columnId) {
                    /* debugger */
                    obj[i].cards.push(cardsType)
                }
                else continue

            }
        }
    }
    obj.map((column: ColumnsTypes) => {

        column.cards.sort((a, b,) => a.order - b.order)
        return column
    })
    obj.sort((a: ColumnsTypes, b: ColumnsTypes) => a.columnId - b.columnId)
    data = obj
    return data
}

export function changeColumnAndCardIdToIndexOfColumn(tmpAr: Array<ColumnsTypes>) {
    tmpAr.map((col, index) => {
        col.columnId = index + 1
        col.cards.forEach((card, index) => {
            card.columnId = col.columnId
            return card
        })
        return col
    })
}

export function changeCardOrderToIndexOfColumn(tmpAr: Array<ColumnsTypes>) {
    tmpAr.map((col, index) => {
        col.cards.forEach((card, index) => {
            card.order = index + 1
            return card
        })
        return col
    })
}
export const getIdForNewCard = (columns: Array<ColumnsTypes>) => {
    let res
    res = columns.map((col) => {
        return col.cards.length
    })
    let result: any = 0
    res.forEach(element => {
        result += element
    });
    return result + 100
    /* 
        let biggestId = 0
        columns.map((col) => {
            col.cards.map((card) => {
                if (card.id > biggestId) biggestId = card.id
    
            })
            return col
        })
        return biggestId */
}

export function getBiggestColumnIdFromStore(columns: Array<ColumnsTypes>) {
    let biggestId = 0
    columns.map((col) => {
        if (col.id > biggestId) biggestId = col.id
        return col
    })
    debugger
    return biggestId
}