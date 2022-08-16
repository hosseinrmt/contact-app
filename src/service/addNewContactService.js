import http from "./httpService";

export default function addNewComment(data) {
  return http.post("/contacts", data);
}
