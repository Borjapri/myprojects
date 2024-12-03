import { Navigate, useParams } from "react-router-dom";
import { SingleEvent } from "../../components/events/SingleEvent";
import { useGetEvents } from "../../hooks/useGetEvents";

export function SingleEventPage() {
  const { data, isLoading, error } = useGetEvents();
  const { id } = useParams();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <Navigate to={"/error"} />;
  if (data === undefined) return <h1>No data</h1>;

  const eventSolo = data.find((event: MyEvent) => event.id === id);

  return (
    <main>
      <SingleEvent singleEvent={eventSolo} />
    </main>
  );
}
