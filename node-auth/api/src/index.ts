import mongoose, { Mongoose } from 'mongoose'
import express from 'express'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import {REDIS_OPTIONS} from './config/cache'
import { SESSION_OPTIONS } from './config/session'
import { APP_PORT} from './config/app'
import { MONGO_URI, MONGO_OPTIONS } from './config/db'

;(async () => {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)
    const RedisStore = connectRedis (session)
const client = new Redis (REDIS_OPTIONS)

const app = express()

app.use(
  session({
      ...SESSION_OPTIONS,
      store: new RedisStore({ client })
  })
)

app.get('/', (req,res) => res.json({message: 'Work'}))
app.listen(APP_PORT, () => console.log('http://localhost:${APP_PORT}'))
}
) ()
