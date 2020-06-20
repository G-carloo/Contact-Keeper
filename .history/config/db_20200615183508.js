// const ContactKeeper = require("ContactKeeper");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
  ContactKeeper.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
