import fastfy from 'fastify'

import { transactionsRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

export const app = fastfy()

app.register(fastifyCookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
