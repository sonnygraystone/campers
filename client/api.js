import request from "superagent";

export function getCampsite() {
  return request.get("api/v1/campsites").then((response) => {
    return response.body;
  });
}

export function showIndividualCampsite(id) {
  return request.get(`api/v1/campsites/${id}`).then((resp) => {
    return resp.body;
  });
}
