import { useDispatch, useSelector } from "react-redux";
import Card from "./card/card";
import './column.scss'
import { AppStateType } from "../../Redux/store/store";


function Column() {

    const columns = useSelector((store: AppStateType) => store.columns)

    return (
        <div className='wrap'>
            <div className='app'>
                {
                    columns.map((obj) => {
                        return (
                            <div key={obj.id}>
                                <div className="columnWrapper">
                                    <div className="column">
                                        <div className="columnTitle">
                                            {obj.columnTitle}
                                        </div>
                                        <div className='Wrap'>
                                            {
                                                obj.cards.map((item) => {
                                                    return (
                                                        <div className="cardWrapper">
                                                            <div className="cardText">
                                                                {item}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <button className="addCardBtn">Add card
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )

    /*     return (
            <div className='Wrap'>
                <div className="column">
                    <div className="columnTitle">
                        Need to do
                    </div>
                    <Card />
                    <button className="addCardBtn">Add card
                    </button>
                </div>
            </div>
    
        ); */
}

export default Column;
