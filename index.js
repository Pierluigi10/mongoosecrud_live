// console.log("testn"); // test
import mongoose from "mongoose";

const crudCommand = "create";

mongoose.connect("mongodb://localhost:27017/appcrud", (err) => {
  if (err) {
    console.log("Error on connect");
  } else {
    console.log("connection open");

    const userSchema = mongoose.Schema({
      name: String,
      username: String,
      email: String,
      age: Number,
    });
    const UserModel = mongoose.model("User", userSchema); //conventionally written in capitals

    switch (crudCommand) {
      case "create":
        const user = new UserModel({
          name: "Jon Ackers",
          username: "ja",
          email: "ja@gmail.com",
          age: 34,
        });
        user.save((err) => {
          if (err) {
            console.log("BAD CREATE");
          } else {
            console.log(`user inserted: ${user.name}`);
          }
          closeConnection();
        });
        break;
      //   case "create2":
      //     (async () => {
      //       await UserModel.create({
      //         name: "Alice Wellington",
      //         username: "aw",
      //         email: "aw@gmail.com",
      //       });
      //       closeConnection();
      //     })();
      //     break;
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
