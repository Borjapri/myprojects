import { useRef } from "react";
import { useAddEvent } from "../../hooks/useAddEvent";
import styles from "./eventForm.module.css";
import z from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CreateEventForm() {
  const { mutate } = useAddEvent();
  const formRef = useRef<HTMLFormElement>(null);

  function clearForm() {
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newEventSchema = z.object({
      name: z.string().min(2, "This field must be filled"),
      description: z.string().min(3, "This field must be filled"),
      attendees: z.number(),
      location: z.string().min(3, "This field must be filled"),
      date: z.date(),
      category: z.string(),
      id: z.string(),
    });

    const newEvent = {
      name: formData.get("name") as MyEvent["name"],
      description: formData.get("description") as MyEvent["description"],
      attendees: Number(formData.get("attendees")) as MyEvent["attendees"],
      location: formData.get("location") as MyEvent["location"],
      date: new Date(formData.get("date") as string) as MyEvent["date"],
      category: formData.get("category") as MyEvent["category"],
      id: crypto.randomUUID(),
    };

    const result = newEventSchema.safeParse(newEvent);

    if (!result.success) {
      toast.error("Unable to save the event, please try again");
      clearForm();
      return;
    }

    mutate(result.data);
    clearForm();
    toast.success("New event submitted!");
  }

  return (
    <>
      <form
        ref={formRef}
        name="form"
        className={styles.event_form}
        onSubmit={handleSubmit}
      >
        <h4 className={styles.form_title}>Create new event</h4>
        <label id="name">
          <p>Event name:</p> <input type="text" name="name" />
        </label>
        <label id="description">
          <p>Description:</p> <textarea name="description" />
        </label>
        <label id="attendees">
          <p>Number of attendees:</p> <input type="number" name="attendees" />
        </label>
        <label id="location">
          <p>Location:</p> <input type="text" name="location" />
        </label>
        <label id="date">
          <p>Date:</p> <input type="date" name="date" />
        </label>
        <label id="category">
          <p>Category:</p> <input type="text" name="category" />
        </label>
        <div className={styles.form_buttons}>
          <button>Save</button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}
