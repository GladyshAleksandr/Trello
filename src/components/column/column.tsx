import { useDispatch, useSelector } from "react-redux";
import Card from "./card/card";
import './column.scss'
import { AppStateType } from "../../Redux/store/store";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { actions } from "../../Redux/actions/actionsCreators";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { changeColumnAndCardIdToIndexOfColumn } from "../../Redux/utils/utils";



type PropsType = {
    countOfCards: number
    id: number
    columnTitle: string
    cards: Array<CardsType>
    index: number
}

const Column: React.FC<PropsType> = ({ countOfCards, id, columnTitle, cards, index }) => {
    const columns = useSelector((store: AppStateType) => store.columns)

    const menuRef = useRef() as MutableRefObject<HTMLDivElement>

    const [isCardAreaOpen, setOpen] = useState(false)
    const [textFromCard, setText] = useState('')
    const [inCollumnSettingsMenu, setColumnSettingsMenu] = useState(false)
    const [columnTitleTmp, setColumnTitleTmp] = useState(columnTitle)
    const dispatch = useDispatch()

    useEffect(() => {

        const onClick = (e: any) => {
            if (menuRef.current === e.target) setColumnSettingsMenu(!inCollumnSettingsMenu)

            else {
                setColumnSettingsMenu(false)
            }
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);

    }, [inCollumnSettingsMenu]);

    useEffect(() => {
        setColumnTitleTmp(columnTitle)


    }, [columnTitle]);

    function handleDeleteColumn() {
        const tmpAr = columns.filter((col) => col.columnId !== id)
        const arrToDispatch = changeColumnAndCardIdToIndexOfColumn(tmpAr)
        debugger
        dispatch(actions.deleteColumnActionCreatorStart(arrToDispatch))
    }

    function handleChangeColumnTitle(e: any) {
        if (e.target) {
            setColumnTitleTmp(e.target.value)
        }
    }

    function handleChange(e: any) {
        setText(e.target.value)
    }

    function handleClick() {
        setOpen(!isCardAreaOpen)

        if (textFromCard.match(/[^\s]/)) {
            dispatch(actions.addCardActionCreatorStart(countOfCards, textFromCard, id, cards.length + 1))
            setText('')
        }
    }
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef} key={id} className="columnWrapper">
                    <div {...provided.dragHandleProps} className="column">
                        <div className="upperColumnMenu">
                            <form>
                                <input type='text' onBlur={() => dispatch(actions.renameColumnActionCreatorStart(columnTitleTmp, id))
                                } onChange={handleChangeColumnTitle} value={columnTitleTmp} className="columnTitle">
                                </input>
                            </form>
                            {inCollumnSettingsMenu === false
                                ?
                                <div ref={menuRef} className="columnSettings">...</div>
                                :
                                <div ref={menuRef} className="columnSettings__clicked">...
                                    <ul >
                                        <li className="TitleOfListLi">Actions with column</li>
                                        <hr></hr>
                                        <li onClick={handleDeleteColumn} >delete column</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className='Wrap'>
                            <Droppable droppableId={id.toString()}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef} {...provided.droppableProps}>
                                        {
                                            cards.map((item, index) => {
                                                return (
                                                    <Card order={item.order} columnId={id} id={item.id} key={item.id} text={item.text} index={index} />
                                                )
                                            })
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                        {
                            isCardAreaOpen ?
                                <div>
                                    <form>
                                        <textarea onChange={handleChange} className="addCardDataTextArea" placeholder="Enter the title of this card" ></textarea>
                                        <button type="button" onClick={handleClick} className="addCardBtn_active">Add card</button>
                                        <img onClick={() => setOpen(!isCardAreaOpen)} className="cancelIcon" src="images/cancelIcon.png"></img>
                                    </form>
                                </div>

                                : <button type="button" onClick={() => setOpen(!isCardAreaOpen)} className="addCardBtn">Add card</button>
                        }
                    </div>
                </div >
            )}
        </Draggable>
    )
}

export default Column;
