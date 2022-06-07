import '../card.scss'
type PropsType = {
    text: string
    handleSetIsCardMenuActive: () => void
}

const CardMenuNotActive: React.FC<PropsType> = ({ text, handleSetIsCardMenuActive }) => {

    return (
        <>
            <div className="textWrapper">
                <div className="cardText">
                    {text}
                </div>
            </div>
            <div className="changeCardBtnWrapper">
                <img onClick={handleSetIsCardMenuActive} className='changeCardBtn' src='images/pen.png'>
                </img>
            </div>
        </>
    )
}

export default CardMenuNotActive

