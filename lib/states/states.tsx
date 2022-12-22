import {atom} from 'recoil';

export const globalWidthState = atom<number>({
    key: 'globalWidth',
    default: 0
})
