import mongoose from "mongoose";

let uri = "mongodb://localhost:27017/mydb";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
 console.log(`Database connection open to ${connection.host} ${connection.name}`);
});

connection.on('error',(err) => {
 console.log('Mongoose default connection error: ' + err);
});

connection.on('disconnected', () => {
 console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
