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
    // Gets the prod with the given id
  getProdCat: function(category) {
    return axios.get("/api/prods/" + category);
    },
  // Deletes the prod with the given id
  deleteProd: function(id) {
    return axios.delete("/api/prods/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};