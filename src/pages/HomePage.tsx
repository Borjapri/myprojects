import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <h4>Where do you wanna go?</h4>
      <main>
        <Link to={"/events"}>
          <img
            src="https://www.eventbookings.com/wp-content/uploads/2024/01/Different-Types-of-Events-in-2024-Which-is-Right-for-You.jpg"
            height={"400px"}
            alt="events picture"
          />
        </Link>
      </main>
    </>
  );
}
