import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './card.scss'
import CardMenuActive from './components/cardMenuActive';
import CardMenuNotActive from './components/cardMenuNotActive';

type Propstype =
    {
        _order: number
        index: any
        id: number
        text: string
        columnId: number
    }

const Card: React.FC<Propstype> = ({ _order, id, text, index, columnId }) => {

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
                            !isCardMenuActive
                                ?
                                <CardMenuNotActive handleSetIsCardMenuActive={handleSetIsCardMenuActive} text={text} />
                                :
                                <CardMenuActive handleSetIsCardMenuActive={handleSetIsCardMenuActive} _order={_order} text={text} columnId={columnId} id={id} />
                        }
                    </div>
                </div>
            )}
        </Draggable>
    );
}

export default Card;
