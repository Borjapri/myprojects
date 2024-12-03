import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../services/getEvents";

export function useGetEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
}
