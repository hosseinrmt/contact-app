import http from "./httpService";

export default function deleteComment(data) {
  return http.delete(`/contacts/${data}`);
}
