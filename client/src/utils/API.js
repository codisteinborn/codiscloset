import axios from "axios";

export default {
  // Gets all prods
  getProds: function() {
    return axios.get("/api/prods");
  },
  // Gets the prod with the given id
  getProd: function(id) {
    return axios.get("/api/prods/" + id);
  },
  // Deletes the prod with the given id
  deleteProd: function(id) {
    return axios.delete("/api/prods/" + id);
  },
  // Saves a prod to the database
  saveProd: function(prodData) {
    return axios.post("/api/prods", prodData);
  }
};