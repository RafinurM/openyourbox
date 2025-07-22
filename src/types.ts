import type React from "react";

export type TItemType = "normal" | "elite" | "rare" | "unique" | "trash";
export type TItem = {
  name: string;
  strength: number;
  type: TItemType;
  icon: string;
  id: string;
  event: string;
};

export type TAward = {
  name: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  score: number;
};

export type TEvent = {
  name?: string;
  content: string;
  event: string;
  text: string;
  award?: TAward | undefined;
};

export type TUser = {
  name: string;
  games: number;
};
