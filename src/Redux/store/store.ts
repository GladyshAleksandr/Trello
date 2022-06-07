import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas/saga";
import { UnionOfActionsCreatorsType } from '../types/actionsCreatorsTypes';
import { ActionTypes } from "../consts/constants";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}



export type InitialStateType = typeof initialState


const initialState = {
    columns: [
        {
            id: 1, columnId: 1, columnTitle: 'Need to do', cards: [{ id: 100, text: 'Some text', columnId: 1, _order: 1 },
            { id: 101, text: 'Lorem ipsum', columnId: 1, _order: 2 },
            { id: 102, text: 'text...', columnId: 1, _order: 3 },
            { id: 103, text: 'Task 1', columnId: 1, _order: 4 },
            { id: 104, text: 'Task 2', columnId: 1, _order: 5 },
            ]
        },
        {
            id: 2, columnId: 2, columnTitle: 'In process', cards: [{ id: 105, text: 'Igor', columnId: 1, _order: 1 },
            { id: 106, text: 'Task', columnId: 2, _order: 2 }]
        },
        {
            id: 3, columnId: 3, columnTitle: 'Done', cards: [{ id: 107, text: 'Important data', columnId: 3, _order: 1 }]
        },
        {
            id: 4, columnId: 4, columnTitle: 'Test 4', cards: []
        },
        {
            id: 5, columnId: 5, columnTitle: 'Test 5', cards: []
        },

    ] as Array<ColumnsTypes>
}


const columnsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case ActionTypes.GET_DATA_FROM_STORAGE_SUCCESS:
            return {
                ...state,
                columns: action.payload.columns
            }



        case ActionTypes.ADD_COLUMN_SUCCESS:
            const newCol = {
                id: action.payload.id,
                columnId: state.columns.length + 1,
                columnTitle: action.payload.columnTitle,
                cards: []
            }
            return {
                ...state,
                columns: [...state.columns, newCol]
            }



        case ActionTypes.ADD_CARD_SUCCESS:
            return {
                ...state,
                columns: state.columns.map((column) => column.columnId !== action.payload.card.columnId ? column : { ...column, cards: [...column.cards, action.payload.card] })
            }



        case ActionTypes.UPDATE_CARD_POSITION_SUCCESS:
            return {
                ...state,
                columns: action.payload.columns
            }



        case ActionTypes.UPDATE_COLUMN_POSITION_SUCCESS:
            return {
                ...state,
                columns: action.payload.columns
            }



        case ActionTypes.DELETE_COLUMN_SUCCESS:
            return {
                ...state,
                columns: action.payload.columns
            }



        case ActionTypes.DELETE_CARD_SUCESS:
            console.log(action.payload.columns)
            return {
                ...state,
                columns: action.payload.columns
            }



        case ActionTypes.RENAME_CARD_SUCCESS:
            return {
                ...state,
                columns: state.columns.map((column) => /* column.columnId === action.payload.columnId ? */({ ...column, card: column.cards.map((card) => card.id === action.payload.id ? { ...card, text: action.payload.text } : card) }) /* : column */)
            }



        case ActionTypes.RENAME_COLUMN_SUCCESS:
            return {
                ...state,
                columns: state.columns.map((column) => column.columnId === action.payload.columnId ? { ...column, columnTitle: action.payload.columnTitle } : column)
            }



        case ActionTypes.RENAME_COLUMN_FAILURE:
        case ActionTypes.RENAME_CARD_FAILURE:
        case ActionTypes.DELETE_CARD_FAILURE:
        case ActionTypes.DELETE_COLUMN_FAILURE:
        case ActionTypes.UPDATE_COLUMN_POSITION_FAILURE:
        case ActionTypes.UPDATE_CARD_POSITION_FAILURE:
        case ActionTypes.ADD_CARD_FAILURE:
        case ActionTypes.ADD_COLUMN_FAILURE:
        case ActionTypes.GET_DATA_FROM_STORAGE_FAILURE:

            console.error(action.type)

            return {
                ...state
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
/* export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
 */


type ActionsType = UnionOfActionsCreatorsType


export default store