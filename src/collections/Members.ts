import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Members: CollectionConfig = {
  slug: 'members',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tag', 'sort', 'updatedAt'],
  },
  fields: [
    {
      name: 'sort',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Manual sort order (e.g. 1, 2, 3...)',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'tag',
              type: 'text',
              required: true,
              admin: {
                description: 'Role or designation (e.g. President, Tech Lead)',
              },
            },
            {
              name: 'imageUrl',
              type: 'text',
              required: true,
              admin: {
                description: 'Image URL for the profile image',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Socials',
          fields: [
            {
              name: 'githubId',
              type: 'text',
              admin: {
                description: 'GitHub username (optional)',
              },
            },
            {
              name: 'linkedinId',
              type: 'text',
              admin: {
                description: 'LinkedIn username/ID (optional)',
              },
            },
            {
              name: 'twitterId',
              type: 'text',
              admin: {
                description: 'Twitter/X username (optional)',
              },
            },
            {
              name: 'instagramId',
              type: 'text',
              admin: {
                description: 'Instagram username (optional)',
              },
            },
          ],
        },
      ],
    },
  ],
}
