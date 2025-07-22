import clsx from "clsx";
import style from "./StatsUI.module.scss";
import { TooltipUI } from "../tooltip-ui/TooltipUI";
import { v4 as uuidv4 } from "uuid";

type TStatsUIProps = {
  lucky: number;
  score: number;
  Icons?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] | undefined;
};

export const StatsUI = ({ lucky, score, Icons }: TStatsUIProps) => {
  return (
    <>
      <div className={style.stats}>
        <p className={clsx(style.stateName, style.stateName_lucky)}>Lucky: {lucky}</p>
        <p className={clsx(style.stateName, style.stateName_score)}>Score: {score}</p>
        <p className={clsx(style.stateName, style.stateName_time)}>
          Time: 
        </p>
        <div className={clsx(style.stateName, style.stateName_awards, style.awards)}>
          {Icons ? Icons.map(Icon => <TooltipUI text={'asd'} customClass={style.toolTip} key={uuidv4()}><Icon className={style.award} key={uuidv4()}/></TooltipUI>) : ''}
        </div>
      </div>
    </>
  );
};
