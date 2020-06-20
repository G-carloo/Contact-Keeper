const contacts = require("contacts");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
  contacts
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((errr) => {
      console.error(err.message);
      process.exit(1);
    });
};

connectDB.db.export = connectDB;
