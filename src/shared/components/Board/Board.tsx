import { v4 as uuidv4 } from "uuid";
import type { JSX } from "react";
import { BoardUI } from "../../ui/board-ui/BoardUI";
import { Block } from "../Block";

export const Board = () => {
  const BLOCK_COUNT: number = 99;
  const blocks: JSX.Element[] = [];

  for (let i = 0; i <= BLOCK_COUNT; i++) {
    blocks.push(<Block key={uuidv4()} />);
  }
  return <BoardUI>{blocks}</BoardUI>;
};
