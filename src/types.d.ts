declare global {
  interface MyEvent {
    id: string;
    name: string;
    date: Date;
    location: string;
    attendees: number;
    description: string;
    category: string;
  }
}
export {};

export interface SingleEventProps {
  singleEvent: MyEvent;
}
