import { Navigate } from "react-router-dom";
import { useGetEvents } from "../../hooks/useGetEvents";
import { CreateEventForm } from "../../components/eventForm/CreateEventForm";
import styles from "./events.module.css";
import { EventList } from "../../components/events/EventList";
import { Fab } from "@mui/material";
import { useState } from "react";

export function EventsPage() {
  const [showEventForm, setShowEventForm] = useState(false);
  const { data, isLoading, error } = useGetEvents();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <Navigate to={"/error"} />;
  return (
    <div className={styles.events_page_body}>
      <main>
        <EventList myEvents={data} />
      </main>
      <aside className={styles.event_form}>
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setShowEventForm(!showEventForm)}
        >
          {showEventForm ? "Hide form" : "Add event"}
        </Fab>
        {showEventForm && <CreateEventForm />}
      </aside>
    </div>
  );
}
