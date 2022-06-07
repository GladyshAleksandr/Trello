import { START_CARD_ID } from "../consts/constants";

export function replaceAt(index: number, replacement: string, str: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export function convertDataFromDbToColumnsTypeData(data: ResponseGetDataFromDBType) {

    const objCols: Array<ColumnsGetType> = data.columns
    const arrOfCards: Array<CardsGetType> = data.cards

    const obj: any = objCols.map((current: any) => {
        const ColumnsTypes = {
            id: current.id,
            columnId: current.columnId,
            columnTitle: current.columnTitle,
            cards: []
        }
        /*         ColumnsTypes.id = current.id
                ColumnsTypes.columnId = current.columnId
                ColumnsTypes.columnTitle = current.columnTitle
                ColumnsTypes.cards = [] */
        return ColumnsTypes
    })

    if (arrOfCards.length > 0) {
        for (let i = 0; i < obj.length; ++i) {
            for (let j = 0; j < arrOfCards.length; ++j) {
                const cardsType = {
                    id: arrOfCards[j].id,
                    text: arrOfCards[j].text,
                    columnId: arrOfCards[j].columnId,
                    _order: arrOfCards[j]._order
                }
                /*     cardsType.id = arrOfCards[j].id
                    cardsType.text = arrOfCards[j].text
                    cardsType.columnId = arrOfCards[j].columnId
                    cardsType._order = arrOfCards[j]._order */

                if (obj[i].columnId === cardsType.columnId) {
                    obj[i].cards.push(cardsType)
                }
            }
        }
    }
    const obToReturn = obj.map((column: ColumnsTypes) => {
        column.cards.sort((a, b,) => a._order - b._order)
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
    const arrToReturn = tmpAr.map((col) => ({ ...col, cards: col.cards.map((card, index) => ({ ...card, _order: index + 1 })) }))
    return arrToReturn
}
export const getIdForNewCard = (columns: Array<ColumnsTypes>) => {
    const tmpArr = columns.map((column) => {
        column.cards.map((card) => {
            const tmpObj = {
                id: card.id,
                text: card.text,
                columnId: card.columnId,
                _order: card._order
            }
            return tmpObj
        })
        return column.cards
    })
    const arrOfCardsRes = [].concat(...tmpArr as any)
    const biggestId = Math.max(...arrOfCardsRes.map((ob: CardsType) => ob.id))
    return biggestId + 1
}

export function getBiggestColumnIdFromStore(columns: Array<ColumnsTypes>) {
    const biggestId = Math.max(...columns.map((col) => col.id))
    return biggestId
}