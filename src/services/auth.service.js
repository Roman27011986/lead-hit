import axios from "axios";

export const getAuth = (id) => {
  return axios.get("/client/test_auth", {
    headers: {
      "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
      "Leadhit-Site-Id": id,
    },
  });
};
