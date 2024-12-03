export async function addEvent(eventToAdd: MyEvent) {
  await fetch("http://localhost:4000/events", {
    method: "POST",
    body: JSON.stringify(eventToAdd),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
