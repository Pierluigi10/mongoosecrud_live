// console.log("testn"); // test
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/appcrud", (err) => {
  if (err) {
    console.log("Error on connect");
  } else {
    console.log("connection open");
    closeConnection();
  }
});

function closeConnection() {
    mongoose.connection.close (err =>{
        if(err) {
            console.log("Error on connection close");
        } else {
            console.log("connection closed")
        }
    })
}