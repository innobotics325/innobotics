import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { slugField } from 'payload'
import { populatePublishedAt } from '../hooks/populatePublishedAt'
import { generatePreviewPath } from '../utilities/generatePreviewPath'
import { revalidatePage } from './Pages/hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Projects: CollectionConfig<'projects'> = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'projects',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'projects',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'imageUrl',
              type: 'text',
              required: true,
              admin: {
                description: 'Direct URL to the project image (e.g. Unsplash URL)',
              },
            },
            {
              name: 'summary',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Short summary for card views and hero section.',
              },
            },
            {
              name: 'status',
              type: 'text',
              defaultValue: 'Active Development',
              admin: {
                width: '33%',
              },
            },
            {
              name: 'field',
              type: 'text',
              defaultValue: 'Intelligent Systems',
              admin: {
                width: '33%',
              },
            },
            {
              name: 'techLead',
              type: 'text',
              defaultValue: 'Open Source',
              admin: {
                width: '33%',
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'narrative',
              type: 'richText',
              required: true,
            },
            {
              name: 'technicalFoundations',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Details',
          fields: [
            {
              name: 'techStack',
              type: 'relationship',
              relationTo: 'technologies',
              hasMany: true,
              label: 'Tech Stack',
            },
            {
              name: 'githubUrl',
              type: 'text',
              admin: {
                description: 'GitHub repository URL',
              },
            },
            {
              name: 'demoUrl',
              type: 'text',
              admin: {
                description: 'Live demo URL',
              },
            },
            {
              name: 'featured',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            {
              name: 'image',
              type: 'text',
              label: 'Meta Image URL',
              admin: {
                description: 'Direct URL to the meta image for SEO/social sharing.',
              },
            },
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
