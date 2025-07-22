import { GameBoardPage } from "@/pages/GameBoardPage";
import { Intro } from "../Intro/Intro";
import { useStage } from "@/shared/store/AppStore";

export const Stage = () => {
    const stage = useStage();
    switch (stage) {
        case 0:
            return <Intro />;
            break;
        case 1: 
        return <GameBoardPage />
        break;
        case 2:
            return <div>stage 2</div>;
        default:
            return <div><Intro /></div>
    }
}