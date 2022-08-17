import http from "./httpService";

export default function getSingleContact(data) {
  return http.get(`/contacts/${data}`);
}
