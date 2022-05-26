import store from '../store/store';


export const getColumnsSelector = () => {
    return store.getState().columns
}