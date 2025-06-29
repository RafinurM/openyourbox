import type { TAward } from "@/types";
import letterIcon from '@assets/svg/letter.svg?react';
import dataIcon from "@assets/svg/data.svg?react";
import moneyIcon from "@assets/svg/money.svg?react";
import purchasesIcon from "@assets/svg/shopping.svg?react";
import financeIcon from "@assets/svg/finance.svg?react";
import faqIcon from '@assets/svg/faq.svg?react';
import computerIcon from '@assets/svg/pc.svg?react';


export const AWARDS: TAward[] = [
    {
        name: 'letter',
        score: 10,
        Icon: letterIcon,
    },
    {
        name: 'data',
        score: 60,
        Icon: dataIcon
    },
    {
        name: 'money',
        score: 1000,
        Icon: moneyIcon
    },
    {
        name: 'purchases',
        score: 450,
        Icon: purchasesIcon
    },
    {
        name: 'treasure',
        score: 1500,
        Icon: financeIcon
    },
    {
        name: 'faq',
        score: 200,
        Icon: faqIcon,
    },
    {
        name: 'computer',
        score: 700,
        Icon: computerIcon
    }
]