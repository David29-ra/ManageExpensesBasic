import { BASE_URL, Fetch } from "./apifetch";

export function CategoriesService() {
  if (!CategoriesService.instance) CategoriesService.instance = this;
  return CategoriesService.instance;
}

CategoriesService.prototype.list =  function() {
  return Fetch(`${BASE_URL}categories`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    }
  })
}

CategoriesService.prototype.destroy =  function(id) {
  return Fetch(`${BASE_URL}categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    }
  })
}
