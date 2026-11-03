import type { CollectionConfig } from 'payload'

export const Banners: CollectionConfig = {
  slug: 'banners',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'sortOrder', 'updatedAt'],
    group: 'Website Management',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'desktopImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'mobileImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'buttonText',
      type: 'text',
    },
    {
      name: 'buttonLink',
      type: 'text',
    },
    {
      name: 'secondaryButtonText',
      type: 'text',
    },
    {
      name: 'secondaryButtonLink',
      type: 'text',
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
  ],
}
