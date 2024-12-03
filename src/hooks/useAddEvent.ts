import { useMutation } from "@tanstack/react-query";
import { addEvent } from "../services/addEvent";
import { queryClient } from "../providers/QueryProvider";

export function useAddEvent() {
  return useMutation({
    mutationKey: ["events"],
    mutationFn: addEvent,
    onSuccess: () => {
      console.log("usemutation successsss"),
        queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
}
