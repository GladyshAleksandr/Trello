import { useDispatch, useSelector } from "react-redux";
import Card from "./card/card";
import './column.scss'
import { AppStateType } from "../../Redux/store/store";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { actions } from "../../Redux/actions/actionsCreators";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { changeColumnAndCardIdToIndexOfColumn } from "../../Redux/utils/utils";
import ColumnSettingsActive from "./components/columnSettingsActive";



type PropsType = {
    idForNewCard: number
    id: number
    columnTitle: string
    cards: Array<CardsType>
    index: number
}

const Column: React.FC<PropsType> = ({ idForNewCard, id, columnTitle, cards, index }) => {
    const columns = useSelector((store: AppStateType) => store.columns)

    const menuRef = useRef<HTMLDivElement>(null)

    const [isCardAreaOpen, setOpen] = useState(false)
    const [textFromCard, setText] = useState('')
    const [inCollumnSettingsMenu, setColumnSettingsMenu] = useState(false)
    const [columnTitleTmp, setColumnTitleTmp] = useState(columnTitle)
    const dispatch = useDispatch()

    useEffect(() => {

        const onClick = (e: MouseEvent) => {
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
        dispatch(actions.deleteColumnActionCreatorStart(arrToDispatch))
    }

    function handleChangeColumnTitle(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target) {
            setColumnTitleTmp(e.target.value)
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value)
    }

    function handleClick() {
        setOpen(!isCardAreaOpen)

        if (textFromCard.match(/[^\s]/)) {
            dispatch(actions.addCardActionCreatorStart(idForNewCard, textFromCard, id, cards.length + 1))
            setText('')
        }
    }

    function handleRenameColumn() {
        dispatch(actions.renameColumnActionCreatorStart(columnTitleTmp, id))
    }
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef} key={id} className="columnWrapper">
                    <div {...provided.dragHandleProps} className="column">
                        <div className="upperColumnMenu">
                            <form>
                                <input type='text' onBlur={handleRenameColumn}
                                    onChange={handleChangeColumnTitle} value={columnTitleTmp} className="columnTitle">
                                </input>
                            </form>
                            {inCollumnSettingsMenu === false
                                ?
                                <div ref={menuRef} className="columnSettings">...</div>
                                :
                                <ColumnSettingsActive menuRef={menuRef} handleDeleteColumn={handleDeleteColumn} />
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
                                                    <Card _order={item._order} columnId={id} id={item.id} key={item.id} text={item.text} index={index} />
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
