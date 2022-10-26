import { createPool } from 'mysql2';
import config from './config.js';

const { db } = config; // destructuring
const pool = createPool(db).promise(); 

export default pool;
