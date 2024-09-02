import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

function EventsList({ events }: { events: EventoEvent[] }) {
  return (
    <section>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
