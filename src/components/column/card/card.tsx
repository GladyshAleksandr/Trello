import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './card.scss'

type Propstype =
    {
        index: any
        id: string
        text: string
    }

const Card: React.FC<Propstype> = ({ id, text, index }) => {


    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    {
                        text === ''
                            ? ''
                            : <div
                                className="cardWrapper">
                                <div className="cardText">
                                    {text}
                                </div>
                            </div>
                    }
                </div>
            )}
        </Draggable>
    );
}

export default Card;
