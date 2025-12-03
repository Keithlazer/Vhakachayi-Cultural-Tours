// Sanity schema for Experience content type
// This is a reference schema - actual implementation would be in Sanity Studio

export const experienceSchema = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Experience Type',
      type: 'string',
      options: {
        list: [
          { title: 'Cultural Immersion', value: 'cultural' },
          { title: 'Mountain Climbing', value: 'mountain' },
          { title: 'Nature Adventures', value: 'nature' },
          { title: 'Traditional Food Journeys', value: 'food' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'featured',
      title: 'Featured Experience',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'includes',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'guide',
      title: 'Primary Guide',
      type: 'reference',
      to: [{ type: 'elder' }],
    },
    {
      name: 'culturalProtocols',
      title: 'Cultural Protocols',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      media: 'image',
    },
    prepare({ title, type, media }: any) {
      return {
        title,
        subtitle: type,
        media,
      }
    },
  },
}

