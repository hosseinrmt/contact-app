import http from "./httpService";

export default function deleteContact(data) {
  return http.delete(`/contacts/${data}`);
}
