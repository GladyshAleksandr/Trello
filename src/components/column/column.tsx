import { useDispatch } from "react-redux";
import Card from "./card/card";
import './column.scss'
import { CardsType } from "../../Redux/store/store";
import React, { useState } from "react";
import { actions } from "../../Redux/actions/actionsCreators";
import { Draggable, Droppable } from "react-beautiful-dnd";



type PropsType = {
    id: number
    columnTitle: string
    cards: Array<CardsType>
    index: number
}

const Column: React.FC<PropsType> = ({ id, columnTitle, cards, index }) => {

    const [isCardAreaOpen, setOpen] = useState(false)
    const [textFromCard, setText] = useState('')
    const dispatch = useDispatch()

    function handleChange(e: any) {
        setText(e.target.value)
    }

    function handleClick() {
        setOpen(!isCardAreaOpen)

        if (textFromCard.match(/[^\s]/)) {
            dispatch(actions.addCardActionCreator(textFromCard, id))
            setText('')
        }
    }

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef} key={id} className="columnWrapper">
                    <div {...provided.dragHandleProps} className="column">
                        <div className="columnTitle">
                            {columnTitle}
                        </div>
                        <div className='Wrap'>
                            <Droppable droppableId={id.toString()}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef} {...provided.droppableProps}>
                                        {
                                            cards.map((item, index) => {
                                                return (
                                                    <Card key={item.id} id={item.id} text={item.text} index={index} />
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
