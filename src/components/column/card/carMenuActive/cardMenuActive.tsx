import { useState, useRef, RefObject, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../../../Redux/actions/actionsCreators"
import { AppStateType } from "../../../../Redux/store/store"
import { changeCardOrderToIndexOfColumn } from "../../../../Redux/utils/utils"

type CardMenuActivePropsType = {
    order: number
    id: number
    text: string
    columnId: number
    handleSetIsCardMenuActive: () => void
}
const CardMenuActive: React.FC<CardMenuActivePropsType> = ({ handleSetIsCardMenuActive, order, text, columnId, id }) => {
    const [cardText, setCardText] = useState(text)
    const inputREf = useRef() as RefObject<HTMLDivElement>


    const stateData = useSelector((store: AppStateType) => store.columns)

    let columns1 = stateData.map((column) => {
        let ob = Object.assign({}, column)
        ob.cards = ob.cards.map((card) => {
            return Object.assign({}, card)
        })
        return ob
    })

    const dispatch = useDispatch()

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (inputREf.current && !inputREf.current.contains(event.target)) handleSetIsCardMenuActive()
            return false
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputREf])

    function handleDelete() {
        columns1.map((column) => {
            column.cards.forEach((value: CardsType, key) => {
                if (value.id === id) column.cards.splice(key, 1)
            })
            return column
        })

        changeCardOrderToIndexOfColumn(columns1)
        dispatch(actions.deleteCardActionCreatorStart(columns1))
        handleSetIsCardMenuActive()
    }

    function dispatchRename() {
        dispatch(actions.renameCardActionCreatorStart(cardText, columnId, order))
        handleSetIsCardMenuActive()
    }

    function handleRename(e: any) {
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