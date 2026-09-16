import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    tokenExpiration: 7200, // 2 hours
    verify: false,
    maxLoginAttempts: 10,
    lockTime: 600 * 1000, // 10 minutes
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}
