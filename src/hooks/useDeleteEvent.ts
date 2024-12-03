import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent } from "../services/deleteEvent";import { toast } from "react-toastify";

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      toast.success("Event deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("Event deleted");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  onError: ()=> {
    toast.error("Failed to delete event"), {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    }
  }
})}
