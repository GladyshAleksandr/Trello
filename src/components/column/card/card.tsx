import { useSelector } from 'react-redux';
import { AppStateType } from '../../../Redux/store/store';
import './card.scss'

function Card() {

    const columns = useSelector((store: AppStateType) => store.columns)
    // comment fot git
    return (
        <div className='Wrap'>
            {
                columns.map((obj) => {
                    return (
                        <div className="cardWrapper">
                            <div className="cardText">
                                {obj.cards}

                            </div>
                        </div>
                    )
                })

            }
        </div>
    );
}

export default Card;
