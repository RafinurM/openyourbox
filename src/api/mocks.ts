import type { TItem } from "@/types";
import GreeceIcon from '@assets/greece.svg?react';
import EgyptIcon from '@assets/egypt.svg?react';
import LondonIcon from '@assets/london.svg?react';
import ChestIcon from "@assets/chest.svg?react";
import Test3D from "@assets/credit.svg?react";
import GiftIcon from "@assets/gift.svg?react";
import SchoolIcon from '@assets/school.svg?react';
import TreasureIcon from '@assets/treasure.svg?react';
import ChipIcon from '@assets/chip.svg?react';

import { v4 as uuidv4 } from "uuid";

export const ITEMS: TItem[] = [
    {
        name: 'Greece travel',
        strength: 90,
        type: 'elite',
        icon: GreeceIcon,
        id: uuidv4(),
        event: 'greece'
    },
    {
        name: 'London travel',
        strength: 120,
        type: 'elite',
        icon: LondonIcon,
        id: uuidv4(),
        event: 'london'
    },
    {
        name: 'Egypt travel',
        strength: 100,
        type: 'elite',
        icon: EgyptIcon,
        id: uuidv4(),
        event: 'egypt'
    },
    {
        name: 'Lucky box',
        strength: 10,
        type: 'normal',
        icon: ChestIcon,
        id: uuidv4(),
        event: 'lbox'
    },
    {
        name: 'test 3d',
        strength: 10,
        type: 'normal',
        icon: Test3D,
        id: uuidv4(),
        event: 'dataTheft'
    },
    {
        name: 'gift',
        strength: 25,
        type: 'rare',
        icon: GiftIcon,
        id: uuidv4(),
        event: 'gift'
    },
    {
        name: 'school',
        strength: 50,
        type: 'normal',
        icon: SchoolIcon,
        id: uuidv4(),
        event: 'school'
    },
    {
        name: 'find treasure',
        strength: 1500,
        type: 'unique',
        icon: TreasureIcon,
        id: uuidv4(),
        event: 'treasure'
    },
    {
        name: 'create computer',
        strength: 2000,
        type: 'rare',
        icon: ChipIcon,
        id: uuidv4(),
        event: 'computer'
    }

]