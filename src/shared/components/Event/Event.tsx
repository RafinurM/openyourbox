import { useAppStore } from "@/shared/store/AppStore";
import { EventUI } from "@/shared/ui/event-ui/EventUI";
import type { TAward } from "@/types";
import { useParams } from "react-router-dom";

export const Event = () => {
  const { id } = useParams();
  const { items, events, stats } = useAppStore();
  const item = items.find(item => item.id === id);
  const event = events.find((e) => e.event === item?.event);
    if (event) {
        stats.awards.push(event.award as TAward);
    }
  return (
    <>
      <EventUI
        name={event ? event.name : ""}
        content={event ? event.content : ""}
        text={event ? event.text : ""}
        award={event ? event.award : undefined}
      />
    </>
  );
};
