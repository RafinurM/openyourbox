import { EVENTS } from "@/api/events";
import { ITEMS } from "@/api/mocks";
import type { TAppStore } from "@/types";
import { create } from "zustand";


//  temp 
import letterIcon from '@assets/svg/letter.svg?react';
import dataIcon from "@assets/svg/data.svg?react";
import purchasesIcon from "@assets/svg/shopping.svg?react";
// 
export const useAppStore = create<Required<TAppStore>>((set) => ({
    isLoaded: false,
    setIsLoad: () => set({ isLoaded: true }),
    status: 'init',
    stats: {
        lucky: 0,
        score: 0,
        awards: [
            // temp
            {
        name: 'letter',
        score: 10,
        Icon: letterIcon,
    },
    {
        name: 'data',
        score: 60,
        Icon: dataIcon
    
    },{
        name: 'purchases',
        score: 450,
        Icon: purchasesIcon
    }],
    },
    stage: 0,
    items: ITEMS,
    events: EVENTS,
    awards: [],
    name: 'test'
}));