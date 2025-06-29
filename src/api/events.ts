import type { TEvent } from "@/types";
import london from '@assets/images/events/london.png';
import egypt from '@assets/images/events/egypt.png';
import dataTheft from "@assets/images/events/dataTheft.png";
import gift from "@assets/images/events/gift.png";
import shopping from "@assets/images/events/shopping.png";
import treasure from "@assets/images/events/treasure.png";
import computerCreate from "@assets/images/events/createComputer.png";
import { AWARDS } from "./awards";

export const EVENTS: TEvent[] = [
    {
        name: 'london joyrney',
        content: london,
        event: 'london',
        text: 'You trip to London and have meet mister, that give you a letter',
        award: AWARDS[0],
    },
    {
        name: 'data theft',
        content: dataTheft,
        event: 'dataTheft',
        text: 'You have a good computer expirience and may still very important data',
        award: AWARDS[1]
    },
    {
        name: 'gift',
        content: gift,
        event: 'gift',
        text: 'You take a small gift',
        award: AWARDS[2]
    },
    {
        name: 'Happy shopping in supermarket',
        content: shopping,
        event: 'shopping',
        text: 'Time to shop! You spend money',
        award: AWARDS[3],
    },
    {
        name: 'Find treasure',
        content: treasure,
        event: 'treasure',
        text: 'This is a treasure!',
        award: AWARDS[4],
    },
    {
        name: 'egypt journey',
        content: egypt,
        event: 'egypt',
        text: 'You trip to Egypt and see Pyramids of GIZA',
        award: AWARDS[5]
    },
    {
        name: 'create computer',
        content: computerCreate,
        event: 'computer',
        text: 'Good knowlege of technique. ... ',
        award: AWARDS[6]
    }
]