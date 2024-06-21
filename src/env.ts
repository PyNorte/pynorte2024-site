import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    EVEN3_API_TOKEN: z.string().uuid(),
  },

  client: {},

  runtimeEnv: {
    EVEN3_API_TOKEN: process.env.EVEN3_API_TOKEN,
  },
})
