import styles from "./event.module.css";
import { SingleEvent } from "./SingleEvent";

export function EventList({ myEvents }: { myEvents: MyEvent[] }) {
  return (
    <div>
      <ul className={styles.myEventList}>
        {myEvents.map((eventMaped: MyEvent) => (
          <li className={styles.event} key={eventMaped.id}>
            <SingleEvent singleEvent={eventMaped} />
          </li>
        ))}
      </ul>
    </div>
  );
}
