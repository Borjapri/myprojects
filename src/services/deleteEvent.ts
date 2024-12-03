export async function deleteEvent(eventId: string) {
  await fetch(`http://localhost:4000/events/${eventId}`, {
    method: "DELETE",
  });
}
