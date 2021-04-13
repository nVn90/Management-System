const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${con.connection.host}`)
  }
  catch {
    console.log(err);
    process.exit(1)
  }
}

module.exports = connectDB