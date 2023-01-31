import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const url = process.env.MONGODB_URL

async function main() {
  mongoose.set("strictQuery", false)
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  console.log("Connected to database")
}

main().catch((err) => console.log("db connect error" + err))
