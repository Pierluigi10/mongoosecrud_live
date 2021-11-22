// console.log("testn"); // test
import mongoose from "mongoose";

const crudCommand = "create";

mongoose.connect("mongodb://localhost:27017/appcrud", (err) => {
  if (err) {
    console.log("Error on connect");
  } else {
    console.log("connection open");
    switch (crudCommand) {
      case "create":
        console.log("TODO: CREATE");
        closeConnection();
        break;
      case "read":
        console.log("TODO: READ");
        closeConnection();
        break;
      case "update":
        console.log("TODO: UPDATE");
        closeConnection();
        break;
      case "delete":
        console.log("TODO: DELETE");
        closeConnection();
        break;
      default:
        console.log("BAD COMMAND: " + crudCommand);
        closeConnection();
        break;
    }
  }
});

// function closeConnection() {
const closeConnection = () => {
  mongoose.connection.close((err) => {
    if (err) {
      console.log("Error on connection close");
    } else {
      console.log("connection closed");
    }
  });
};
