import { Link, useParams } from "react-router-dom";
import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import { SingleEventProps } from "../../types";
import styles from "./singleEvent.module.css";
import { ROUTES } from "../../const";

export function SingleEvent({ singleEvent }: SingleEventProps) {
  const { mutate: deleteEvent } = useDeleteEvent();
  const { id: currentRoute } = useParams();
  const isInEventPage = currentRoute === singleEvent.id;

  return (
    <div className={styles.single_event}>
      <h4>{singleEvent.name}</h4>
      <h3>ID:{singleEvent.id}</h3>
      <p>{singleEvent.description}</p>
      <p>attendees: {singleEvent.attendees}</p>
      <small>Location: {singleEvent.location}</small>
      <small>Date: {singleEvent.date}</small>
      {/* siempre se me complica el tema de las fechas */}
      <div className={styles.single_event_buttons}>
        <button
          onClick={() => deleteEvent(singleEvent.id)}
          className={`${styles.single_event_button} ${styles.delete_button}`}
        >
          Delete event
        </button>
        <button
          className={`${styles.single_event_button} ${styles.go_to_event_button}`}
        >
          <Link
            className={styles.event_navigation_link}
            to={isInEventPage ? ROUTES.events : ROUTES.eventId(singleEvent.id)}
          >
            {isInEventPage ? "Go to events page" : "Go to event"}
          </Link>

        </button>
      </div>
         </div>
  );
}
