import type { TAward, TEvent, TItem } from "@/types";

export const URL = import.meta.env.VITE_APP_OPENYOURBOX_API_URL;

export const getItems = (): Promise<void | TItem[]> =>
  fetch(`${URL}/items`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("network responce fail");
      }
      return resp.json();
    })
    .then((data: TItem[]) => data)
    .catch((err) => console.log(err));

export const getEvents = (): Promise<TEvent[]> =>
  fetch(`${URL}/events`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("network responce fail");
    }
    return resp.json();
  });

export const getAwards = (): Promise<TAward[]> =>
  fetch(`${URL}/awards`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("network responce fail");
    }
    return resp.json();
  });

  // TODO: need get user API
  // export const 
