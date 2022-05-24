import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './card.scss'
import CardMenuActive from './carMenuActive/cardMenuActive';

type Propstype =
    {
        order: number
        index: any
        id: number
        text: string
        columnId: number
    }

const Card: React.FC<Propstype> = ({ order, id, text, index, columnId }) => {

    const [isCardMenuActive, setCardMenu] = useState(false)

    useEffect(() => {
    }, [isCardMenuActive])

    function handleSetIsCardMenuActive() {
        setCardMenu(!isCardMenuActive)
    }

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    <div className="cardWrapper">
                        {
                            isCardMenuActive === false
                                ?
                                <div>
                                    <div className="textWrapper">
                                        <div className="cardText">
                                            {text}
                                        </div>
                                    </div>
                                    <div className="changeCardBtnWrapper">
                                        <img onClick={handleSetIsCardMenuActive} className='changeCardBtn' src='images/pen.png'>
                                        </img>
                                    </div>
                                </div>
                                :
                                <CardMenuActive handleSetIsCardMenuActive={handleSetIsCardMenuActive} order={order} text={text} columnId={columnId} id={id} />
                        }
                    </div>
                </div>
            )}
        </Draggable>
    );
}

export default Card;
