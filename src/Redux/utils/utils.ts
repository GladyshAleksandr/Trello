import { ColumnsTypes } from './../store/store';
export function replaceAt(index: number, replacement: string, str: string) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

export function cnahgeCardIdIfNeed(arr: Array<ColumnsTypes>, firstLetterCheck: boolean, lastLetterCheck: boolean) {

    if (firstLetterCheck === true && lastLetterCheck === true) {
        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr[i].cards.length; ++j) {
                if (`${j + 1}` !== arr[i].cards[j].id[arr[i].cards[j].id.length - 1]) //rewrites last letter of cards id to cards id
                {
                    arr[i].cards[j].id = replaceAt(2, `${j + 1}`, arr[i].cards[j].id)
                }
                if ((arr[i].id.toString()) !== arr[i].cards[j].id[0]) {  //rewrites first letter of cards id to column id
                    arr[i].cards[j].id = replaceAt(0, arr[i].id.toString(), arr[i].cards[j].id)
                }
            }
        }
        return
    }

    if (firstLetterCheck === true) {
        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr[i].cards.length; ++j) {
                if ((arr[i].id.toString()) !== arr[i].cards[j].id[0]) {  //rewrites first letter of cards id to column id
                    arr[i].cards[j].id = replaceAt(0, arr[i].id.toString(), arr[i].cards[j].id)
                }
            }
        }
    }

    if (lastLetterCheck === true) {
        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr[i].cards.length; ++j) {
                if (`${j + 1}` !== arr[i].cards[j].id[arr[i].cards[j].id.length - 1]) //rewrites last letter of cards id to cards id
                {
                    arr[i].cards[j].id = replaceAt(2, `${j + 1}`, arr[i].cards[j].id)
                }
            }
        }
    }

}