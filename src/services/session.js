import { BASE_URL, Fetch } from "./apifetch";

export function SessionsService() {
  if (!SessionsService.instance) SessionsService.instance = this;

  return SessionsService.instance;
}

SessionsService.prototype.login =  function(email, password) {
  return Fetch(`${BASE_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
}

SessionsService.prototype.logout =  function() {
  return Fetch(`${BASE_URL}logout`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`
    }
  })
}