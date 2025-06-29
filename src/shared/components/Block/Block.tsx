import { useState } from "react";
import { BlockUI } from "../../ui/block-ui/BlockUI";
import { ITEMS } from "@/api/mocks";
import { useNavigate } from "react-router-dom";

export const Block = () => {
  const [state, setState] = useState(true);
  const navigate = useNavigate();
  const rndmNum: number = Math.floor(Math.random() * ITEMS.length);
  const item = ITEMS[rndmNum];
  const launchEvent = (id: string) => {
    navigate(`/events/${id}`);
  }
  const open = () => {
    setState(false);
    launchEvent(item.id);
  };

  return <BlockUI Icon={item.icon} action={open} isOpen={state} />;
};
