require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL || undefined
const MONGO_URL2 = process.env.MONGO_URL2 || undefined
const REDIS_URL = process.env.REDIS_URL || undefined
const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || undefined
const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || undefined
const MONGOEXPRESS_LOGIN = process.env.MONGOEXPRESS_LOGIN || undefined
const MONGOEXPRESS_PASSWORD = process.env.MONGOEXPRESS_PASSWORD || undefined
const MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE || undefined

module.exports = {
  MONGO_URL,
  MONGO_URL2,
  REDIS_URL,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGOEXPRESS_LOGIN,
  MONGOEXPRESS_PASSWORD,
  MONGO_INITDB_DATABASE
}