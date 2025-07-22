import { useState } from "react";
import { BlockUI } from "../../ui/block-ui/BlockUI";
import { useNavigate } from "react-router-dom";
import { useItems } from "@/shared/store/AppStore";

export const Block = () => {
  const [state, setState] = useState(true);
  const navigate = useNavigate();
  const items = useItems();
  const launchEvent = (id: string) => {
    navigate(`/events/${id}`);
  };
  if (items.length !== 0) {
    const rndmNum: number = Math.floor(Math.random() * items.length);
    const item = items[rndmNum];
    const open = () => {
      if (!state) {
        return;
      }
      setState(false);
      launchEvent(item.id);
    };

     return <BlockUI item={item} action={open} isOpen={state} />;
  }
  return null;
 
};
