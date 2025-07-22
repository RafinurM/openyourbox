import { useEvents, useItems } from "@/shared/store/AppStore";
import { EventUI } from "@/shared/ui/event-ui/EventUI";
import { useParams } from "react-router-dom";

export const Event = () => {
  const { id } = useParams();
  const items = useItems();
  const events = useEvents();
  const item = items.find(item => item.id === id);
  const event = events.find(event => event.event === item?.event);
  return (
    <>
    { event ? <EventUI
        name={event.name}
        content={event.content}
        text={event.name}
        award={event.award}
      /> : null}
      
    </>
  );
};
