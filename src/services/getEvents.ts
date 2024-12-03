export async function getEvents() {
  try {
    const response = await fetch("http://localhost:4000/events");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(`this is the error fetching data:${e}`);
  }
}
