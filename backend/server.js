const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const mongoose = require("mongoose");


process.on("uncaughtException", err => {
	console.log(err.name, err.message);
	console.log('Uncaught Exception Shutting down');

})
const app = require("./app");


//! when its time to connect to atlas server
// const DB = process.env.DATABASE.replace('<DATABASE_PASSWORD>', process.env.DATABASE_PASSWORD)


const DB = process.env.DATABASE_LOCAL || "mongodb://localhost:27017/";

mongoose
	.connect(DB)
	.then(
		console.log('Db connection successfull')
	)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})

process.on("unhandledRejection", err => {
	console.log(err.name, err.message);
	console.log('UNHANDLED REJECTION Shutting down');
	server.close(() => {
		process.exit(1);
	});
})