import { UPDATE_CARD_POSITION, UPDATE_COLUMN_POSITION } from './../consts/constants';
import { actions } from './../actions/actionsCreators';
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { ADD_COLUMN, ADD_CARD } from "../consts/constants";
import rootSaga from "../sagas/saga";
import { cnahgeCardIdIfNeed } from '../utils/utils';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export type CardsType =
    {
        id: string
        text: string
    }

export type ColumnsTypes =
    {
        id: number
        columnTitle: string
        cards: Array<CardsType>
    }

type InitialStateType = typeof initialState



const initialState = {
    columns: [
        {
            id: 1, columnTitle: 'Need to do', cards: [
                { id: '1_1', text: 'I need to do mini Trello' },
                { id: '1_2', text: 'I need to do' },
                { id: '1_3', text: 'это текст-"рыба", часто используемый в печати и вэб-дизайне. ' }
            ]
        },
        {
            id: 2, columnTitle: 'In process', cards: [
                { id: '2_1', text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.' },
                { id: '2_2', text: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона' }
            ]
        },
        {
            id: 3, columnTitle: 'Done', cards: [{ id: '3_1', text: '' }]
        }
    ] as Array<ColumnsTypes>
}


const columnsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_COLUMN:

            let newColumn = {
                id: state.columns.length + 1,
                columnTitle: action.title,
                cards: [{ id: `${(state.columns.length + 1)}_0`, text: '' }]
            }

            return {
                ...state,
                columns: [...state.columns, newColumn]
            }

        case ADD_CARD:
            let columnToChange: Array<ColumnsTypes> = state.columns.filter((col) => col.id === action.id)
            columnToChange[0].cards.push({ id: `${columnToChange[0].id}_${columnToChange[0].cards.length + 1}`, text: action.text })
            let arr1 = state.columns.filter((col) => col.id !== action.id)
            arr1.push(columnToChange[0])
            let filteredArr: Array<ColumnsTypes> = arr1.sort(function (a: ColumnsTypes, b: ColumnsTypes) {
                return a.id - b.id
            })

            return {
                ...state,
                columns: filteredArr
            }

        case UPDATE_CARD_POSITION:
            let arr = state.columns.filter((i) => i.id !== action.obj.id)
            arr.push(action.obj)
            let arrFinal: Array<ColumnsTypes> = arr.sort(function (a: ColumnsTypes, b: ColumnsTypes) {
                return a.id - b.id
            })
            cnahgeCardIdIfNeed(arrFinal, true, true)

            return {
                ...state,
                columns: arrFinal
            }

        case UPDATE_COLUMN_POSITION:
            cnahgeCardIdIfNeed(action.arr, true, false)
            return {
                ...state,
                columns: action.arr
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
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
type ActionsType = InferActionsTypes<typeof actions>


export default store