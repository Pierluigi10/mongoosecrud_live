// console.log("testn"); // test
import mongoose from "mongoose";

// const crudCommand = "create";
// const crudCommand = "read";
const crudCommand = "update";
// const crudCommand = "delete";


mongoose.connect("mongodb://localhost:27017/appcrud", (err) => {
  if (err) {
    console.log("Error on connect");
  } else {
    console.log("connection open");

    const userSchema = mongoose.Schema({
      //   name: String,
      name: { type: String, required: true },
      username: String,
      email: String,
      age: Number,
    });
    const UserModel = mongoose.model("User", userSchema); //conventionally written in capitals

    switch (crudCommand) {
      case "create":
        const user = new UserModel({
          name: "TEST",
          username: "TEST",
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
        (async () => {
            const users = await UserModel.find({});
            users.forEach(user => console.log(user.name));
            closeConnection();
        })();
        break;
      case "update":
        (async () => {
            await UserModel.findOneAndUpdate({ username: "TEST" }, { $set: { email: "33email" } });
            console.log('user updated');
            closeConnection();
        })();
        break;
      case "delete":
        (async () => {
            await UserModel.deleteOne({ username: "TEST" });
            console.log('user deleted');
            closeConnection();
        })();
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
