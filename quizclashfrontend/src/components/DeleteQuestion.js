import axios from "axios";
import React from "react";
import { useCallback } from "react";
import tostDefault from "../data/tostDefault";
import { toast } from "react-toastify";

export default function DeleteQuestion(props) {
  const { fetchQuestions } = props;
  const del = useCallback(async () => {
    const id = toast.loading("Deleting...", tostDefault);

    try {
      const response = await axios.delete(`/question/${props.id}/`);

      console.log(response);

      if (response.status === 204) {
        console.log(props.id);
        toast.update(id, {
          ...tostDefault,
          render: `Deleted Successs`,
          type: "success",
          isLoading: false,
          closeButton: true,
        });
        fetchQuestions();
      }
    } catch (error) {
      console.log(props.id);
      toast.update(id, {
        ...tostDefault,
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        closeButton: true,
      });

      console.error({
        message: error.message,
        code: error.code,
        response: error.response?.data,
      });
    }
  }, [props.id]);

  return (
    <button type="button" className="btn btn-dark ms-1 me-1" onClick={del}>
      Del
    </button>
  );
}
