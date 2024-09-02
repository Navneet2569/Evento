import { EventoEvent } from "@/lib/types";
import React from "react";

function EventCard({ event }: { event: EventoEvent }) {
  return <section>{event.name}</section>;
}

export default EventCard;
