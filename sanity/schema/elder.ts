// Sanity schema for Elder content type

export const elderSchema = {
  name: 'elder',
  title: 'Elder/Guide',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lineage',
      title: 'Lineage/Title',
      type: 'string',
      description: 'e.g., "Third-generation keeper of Matobo oral histories"',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'video',
      title: 'Video Introduction',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'communities',
      title: 'Partner Communities',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'lineage',
      media: 'image',
    },
  },
}

