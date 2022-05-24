import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const api = {
    getDataFromStore() {
        return instance.get('/').then(res => res)
    },

    postAddCard(id: number, text: string, columnId: number, order: number) {
        return instance.post('/add-card', {
            id,
            text,
            columnId,
            order
        }).then(res => res)
    },

    postAddColumn(columnTitle: string, columnId: number) {
        return instance.post('/add-column', {
            columnTitle,
            columnId
        }).then(res => res)
    },

    postMoveColumn(columns: Array<ColumnsTypes>) {
        return instance.post('/move-column', {
            columns
        }).then(res => res)
    },

    postMoveCard(columns: Array<ColumnsTypes>) {
        return instance.post('/move-card', {
            columns
        }).then(res => res)
    },

    deleteCard(columns: Array<ColumnsTypes>) {
        return instance.delete('/delete-card', {
            data:
            {
                columns
            }
        }).then(res => res)
    },

    deleteColumn(columns: Array<ColumnsTypes>) {
        return instance.delete('/delete-column', {
            data:
            {
                columns
            }
        }).then(res => res)
    },

    postRenameCard(text: string, columnId: number, order: number) {
        return instance.post('/rename-card', {
            text,
            columnId,
            order
        }).then(res => res)
    },

    postRenameColumn(columnTitle: string, columnId: number) {
        return instance.post('/rename-column', {
            columnTitle,
            columnId
        }).then(res => res)
    }

}