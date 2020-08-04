import index from './index';
import dotenv from 'dotenv';

dotenv.config();

index.listen(`${process.env.PORT}`);

console.log(`API iniciada porta: ${process.env.PORT}`);