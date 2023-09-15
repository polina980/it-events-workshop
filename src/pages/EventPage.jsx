import React, { Suspense } from "react";
import { useLoaderData, Await, useAsyncValue } from "react-router-dom";
import { Event } from "../components/Event/Event";
import { Loader } from "../UI-kit";
import { apiEvents } from "../utils/api";

const EventFromApi = () => {
  const event = useAsyncValue();
  return <Event selectedEvent={event} />;
};

const EventPage = () => {
  const event = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={event}>
        <EventFromApi />
      </Await>
    </Suspense>
  );
};

const eventLoader = async ({ params }) => {
  const id = params.id;
  const event = await apiEvents.getSelectedEvent(id) 
  console.log("Получено событие с сервера:", event);
  return event
};

export { EventPage, eventLoader };
