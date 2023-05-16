import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('DB connection established');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('DB connection established');
  } catch (error) {
    console.log(error);
  }
};
