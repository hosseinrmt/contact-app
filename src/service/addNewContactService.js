import http from "./httpService";

export default function addNewContact(data) {
  return http.post("/contacts", data);
}
