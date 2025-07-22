import { getAwards, getEvents, getItems } from "@/api/openyourbox-api";
import type { TAward, TEvent, TItem, TUser } from "@/types";
import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface IInitialState {
    isLoaded: boolean;
    stats: {
        lucky: number;
        score: number;
        awards: TAward[];
    };
    stage: number;
    status: string;
    items: TItem[];
    events: TEvent[];
    awards: TAward[];
    user: TUser | undefined;
}

interface IActions {
    setIsLoad: () => void;
    fetchItems: () => Promise<void>;
    fetchEvents: () => Promise<void>;
    fetchAwards: () => Promise<void>;
}

interface IAppStore extends IInitialState, IActions { }

const initialState: IInitialState = {
    isLoaded: false,
    stats: {
        lucky: 100,
        score: 0,
        awards: [],
    },
    stage: 0,
    status: "initialization",
    items: [],
    events: [],
    awards: [],
    user: undefined,
};

const appStore: StateCreator<IAppStore, [["zustand/devtools", never]]> = (
    set
) => ({
    ...initialState,
    setIsLoad: () =>
        set(
            () => ({ isLoaded: true }),
            false,
            "setLoadStatus"
        ),
    fetchItems: async () => {
        // set({ isLoaded: true }, false, 'fetchItems');
        try {
            const resp = await getItems();
            if (resp) {
                set({items: resp}, false, 'fetchItems/success')
            }
        } catch (error) {
            console.log('Have error', error);
        }
        // finally {
        //     set({ isLoaded: false }, false, 'fetchItems/finally');
        // }
    },
    fetchEvents: async () => {
        // set({ isLoaded: true }, false, 'fetchEvents');
        try {
            const resp = await getEvents();
            if (resp) {
                set({events: resp}, false, 'fetchEvents/success');
            }
        } catch (error) {
            console.log('Have error', error);
        }
        // finally {
        //     set({ isLoaded: false }, false, 'fetchEvents/finally');
        // }
    },
    fetchAwards: async () => {
        // set({ isLoaded: true }, false, 'fetchAwards');
        try {
            const resp = await getAwards();
            if (resp) {
                set({awards: resp}, false, 'fetchAwards/success');
            }
        } catch (error) {
            console.log('Have error', error);
        }
        // finally {
        //     set({ isLoaded: false }, false, 'fetchAwards/finally');
        // }
    },
});

const useAppStore = create<IAppStore>()(devtools(appStore));

// selectors
export const useIsLoaded = () => useAppStore((state) => state.isLoaded);
export const useStats = () => useAppStore((state) => state.stats);
export const useStage = () => useAppStore((state) => state.stage);
export const useStatus = () => useAppStore((state) => state.status);
export const useItems = () => useAppStore((state) => state.items);
export const useEvents = () => useAppStore((state) => state.events);
export const useAwards = () => useAppStore((state) => state.awards);
export const useUser = () => useAppStore((state) => state.user);

// actions selectors
export const setIsLoad = () => useAppStore.getState().setIsLoad();
export const fetchItems = () => useAppStore.getState().fetchItems();
export const fetchEvents = () => useAppStore.getState().fetchEvents();
export const fetchAwards = () => useAppStore.getState().fetchAwards();
