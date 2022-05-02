import { actions } from './../actions/actionsCreators';
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { ADD_COLUMN } from "../consts/constants";
import rootSaga from "../sagas/saga";



declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}                                                                       // need to read this


type ColumnsTypes =
    {
        id: number
        columnTitle: string
        cards: Array<String>
    }

type InitialStateType = typeof initialState



const initialState = {
    columns: [
        {
            id: 1, columnTitle: 'Need to do', cards: ['I need to do mini Trello', 'I need to do', 'это текст-"рыба", часто используемый в печати и вэб-дизайне. ']
        },
        {
            id: 2, columnTitle: 'In process', cards: ['Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.', 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона']
        },
        {
            id: 3, columnTitle: 'Done', cards: []
        }
    ] as Array<ColumnsTypes>
}


const columnsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_COLUMN:

            let newColumn = {
                id: state.columns.length + 1,
                columnTitle: action.title,
                cards: ['']
            }

            return {
                ...state,
                columns: [...state.columns, newColumn]
            }
        default:
            return state
    }
}


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    columnsReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

type ReducerType = typeof columnsReducer
export type AppStateType = ReturnType<ReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never // Need to remember
type ActionsType = InferActionsTypes<typeof actions>


export default store