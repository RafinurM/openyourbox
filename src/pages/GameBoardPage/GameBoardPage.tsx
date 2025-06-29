import { Board } from "@/shared/components/Board";
import { MainUI } from "@/shared/ui/main-ui/MainUI";

import type { FC } from "react";

export const GameBoardPage: FC = () => {
  return (
      <MainUI>
        <Board />
      </MainUI>
  );
};
