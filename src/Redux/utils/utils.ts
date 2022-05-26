import { START_CARD_ID } from "../consts/constants";

export function replaceAt(index: number, replacement: string, str: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export function convertDataFromDbToColumnsTypeData(data: ResponseGetDataFromDBType) {

    const objCols: Array<ColumnsGetType> = data.columns
    const arrOfCards: Array<CardsGetType> = data.cards

    const obj: any = objCols.map((current: any) => {
        const ColumnsTypes = {
            id: undefined,
            columnId: undefined,
            columnTitle: undefined,
            cards: []
        }
        ColumnsTypes.id = current.id
        ColumnsTypes.columnId = current.columnId
        ColumnsTypes.columnTitle = current.columnTitle
        ColumnsTypes.cards = []
        return ColumnsTypes
    })

    if (arrOfCards.length > 0) {
        for (let i = 0; i < obj.length; ++i) {
            for (let j = 0; j < arrOfCards.length; ++j) {
                const cardsType = {
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
                    obj[i].cards.push(cardsType)
                }
            }
        }
    }
    const obToReturn = obj.map((column: ColumnsTypes) => {
        column.cards.sort((a, b,) => a.order - b.order)
        return column
    })
        .sort((a: ColumnsTypes, b: ColumnsTypes) => a.columnId - b.columnId)
    return obToReturn
}

export function changeColumnAndCardIdToIndexOfColumn(tmpAr: Array<ColumnsTypes>) {
    const arrToReturn = tmpAr.map((col, index) => {
        return {
            ...col,
            columnId: index + 1,
            cards: col.cards.map((card) => ({ ...card, columnId: index + 1 }))
        }
    })
    return arrToReturn
}

export function changeCardOrderToIndexOfColumn(tmpAr: Array<ColumnsTypes>) {
    const arrToReturn = tmpAr.map((col) => ({ ...col, cards: col.cards.map((card, index) => ({ ...card, order: index + 1 })) }))
    return arrToReturn
}
export const getIdForNewCard = (columns: Array<ColumnsTypes>) => {
    const result = columns.reduce((prevCol, currentCol) => { return prevCol + currentCol.cards.length }, 0)
    return result + START_CARD_ID
}

export function getBiggestColumnIdFromStore(columns: Array<ColumnsTypes>) {
    const biggestId = Math.max(...columns.map((col) => col.id))
    return biggestId
}