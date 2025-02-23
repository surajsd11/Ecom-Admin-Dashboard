import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js" 
import generalRoutes from "./routes/general.js" 
import managementRoutes from "./routes/management.js" 
import salesRoutes from "./routes/sales.js" 

import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transaction from "./models/Transaction.js"
import OverallStat from "./models/OverallStat.js" 
import { dataUser, dataProductStat, dataProduct, dataTransaction, dataOverallStat} from "./data/index.js "

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingProducts = await Product.find().lean();
      if (existingProducts.length === 0) {
        await Product.insertMany(dataProduct);
      }

      const existingProductStats = await ProductStat.find().lean();
      if (existingProductStats.length === 0) {
        await ProductStat.insertMany(dataProductStat);
      }

      const existingTransaction = await Transaction.find().lean();
      if(existingTransaction.length === 0){
        await Transaction.insertMany(dataTransaction);
      }

      const existingOverallStat = await OverallStat.find().lean();
      if(existingOverallStat.length === 0){
        await OverallStat.insertMany(dataOverallStat);
      }

      for (const user of dataUser) {
        const existingUser = await User.findOne({ _id: user._id });
        if (!existingUser) {
          await User.insertMany([user]);
        }
      }

      console.log("Data insertion completed successfully!");
    } catch (err) {
      console.error("Error inserting data:", err);
    }
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


const port = parseInt(process.env.PORT) || 5001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});