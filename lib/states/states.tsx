import {atom} from 'recoil';

export const globalWidthState = atom<number>({
    key: 'globalWidth',
    default: 0
})

export const clientScrollY = atom<number>({
    key: 'clientScrollY',
    default: 0
})
