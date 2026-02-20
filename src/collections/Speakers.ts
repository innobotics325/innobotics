import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Speakers: CollectionConfig = {
  slug: 'speakers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'company', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'topic',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
      required: true,
      admin: {
        description: 'Direct URL to the speaker photo (e.g. Unsplash URL)',
      },
    },
    {
      name: 'linkedin',
      type: 'text',
      admin: {
        description: 'LinkedIn profile URL (optional)',
      },
    },
    {
      name: 'twitter',
      type: 'text',
      admin: {
        description: 'Twitter/X profile URL (optional)',
      },
    },
  ],
}
