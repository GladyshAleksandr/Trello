import React, { useState, useRef, RefObject, useEffect, ChangeEvent } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actions } from "Redux/actions/actionsCreators"
import { getColumnsSelector } from "Redux/selectors/columnsSelectors"
import { changeCardOrderToIndexOfColumn } from "Redux/utils/utils"

type CardMenuActivePropsType = {
    _order: number
    id: number
    text: string
    columnId: number
    handleSetIsCardMenuActive: () => void
}
const CardMenuActive: React.FC<CardMenuActivePropsType> = ({ handleSetIsCardMenuActive, _order, text, columnId, id }) => {
    const [cardText, setCardText] = useState(text)
    const inputREf = useRef<HTMLDivElement>(null)

    const stateData = useSelector(getColumnsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputREf.current && !inputREf.current.contains(event.target as Node)) handleSetIsCardMenuActive()
            return false
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputREf])

    function handleDelete() {
        const columns = stateData.map((column) => ({ ...column, cards: column.cards.filter((card) => card.id !== id) }))

        const arrToDispatch = changeCardOrderToIndexOfColumn(columns)
        dispatch(actions.deleteCardActionCreatorStart(arrToDispatch))
        handleSetIsCardMenuActive()
    }

    function dispatchRename() {
        dispatch(actions.renameCardActionCreatorStart(cardText, id /* columnId, order */))
        handleSetIsCardMenuActive()
    }

    function handleRename(e: React.ChangeEvent<HTMLTextAreaElement>) {
        if (e.target) {
            setCardText(e.target.value)
        }
    }

    return (
        <div ref={inputREf} className='cardWrapper-active'>
            <div className='formWrapper' >
                <textarea value={cardText} onChange={handleRename} className='enterTextToCardText' />
                <input onClick={dispatchRename} value='save' type='button' className='formButton' />
            </div>
            <div className="cardMenuWrapper">
                <ul>
                    <li onClick={handleDelete}>
                        <div className="liText">Delete card</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardMenuActive