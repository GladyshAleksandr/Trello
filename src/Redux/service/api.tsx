import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const api = {
    getDataFromStore() {
        return instance.get('/columns').then(res => res)
    },

    postCard(id: number, text: string, columnId: number, _order: number) {
        return instance.post('/cards', {
            id,
            text,
            columnId,
            _order
        }).then(res => res)
    },

    postColumn(columnTitle: string, columnId: number) {
        return instance.post('/columns', {
            columnTitle,
            columnId
        }).then(res => res)
    },

    putColumns(columns: Array<ColumnsTypes>) {
        return instance.put('/columns', {
            columns
        }).then(res => res)
    },

    putCards(columns: Array<ColumnsTypes>) {
        return instance.put('/cards', {
            columns
        }).then(res => res)
    },

    deleteCard(columns: Array<ColumnsTypes>) {
        return instance.delete('/card', {
            data:
            {
                columns
            }
        }).then(res => res)
    },

    deleteColumn(columns: Array<ColumnsTypes>) {
        return instance.delete('/column', {
            data:
            {
                columns
            }
        }).then(res => res)
    },

    patchRenameCard(text: string, id: number /* columnId: number, _order: number */) {
        return instance.patch(`/cards/${id}`, {
            text
        }).then(res => res)
    },

    patchRenameColumn(columnTitle: string, columnId: number) {
        return instance.patch(`/columns/${columnId}`, {
            columnTitle
        }).then(res => res)
    }

}