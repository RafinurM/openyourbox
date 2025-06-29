import type { TAward } from "@/types";
import style from "./EventUI.module.scss";
import { Button } from "@/shared/components/Button";

type TEventUIProps = {
  name?: string | undefined;
  content?: string | undefined;
  text?: string | undefined;
  award?: TAward | undefined;
};

export const EventUI = ({ name, content, text, award }: TEventUIProps) => {
  const Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined =
    award?.Icon;
  return (
    <div className={style.event}>
      <h1 className={style.event_name}>{name}</h1>
      <img src={content} className={style.content} alt={name} />
      <p className={style.event_text}>{text}</p>
      {award ? (
        <div className={style.award}>
          {Icon ? <Icon className={style.award_icon} /> : null}
          <p className={style.award_text}>Bonus</p>
        </div>
      ) : null}
      <Button name="action" className={style.action}/>
    </div>
  );
};
