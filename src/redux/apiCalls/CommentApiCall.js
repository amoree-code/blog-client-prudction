import { postActions } from "../slices/PostSlice";
import { commentActions } from "../slices/commentSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Create Comment
export function createComment(newComment) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post("/api/comments", newComment, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.addCommentToPost(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// Update Comment
export function updateComment(commentId, comment) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/comments/${commentId}`,
        comment,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(postActions.updateCommentPost(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// Delete Comment
export function deleteComment(commentId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.delete(`/api/comments/${commentId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(commentActions.deleteComment(commentId));
      dispatch(postActions.deleteCommentPost(commentId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// get all Comment
export function getAllComment(commentId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(`/api/comments/`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(commentActions.setComments(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}
