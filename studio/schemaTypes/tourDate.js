export default {
  name: 'tourDate',
  title: 'Tour Date',
  type: 'document',
  fields: [
    {
      name: 'event',
      title: 'Event',
      description: 'e.g. "NÃOBODY - Guimarães"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'MMM DD, YYYY' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkLabel',
      title: 'Link label',
      description: 'Text shown on the right, e.g. "Buy tickets" or "Free"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      description: 'Optional. Leave empty for non-clickable labels like "Free".',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
    },
  ],
  orderings: [
    {
      title: 'Date, ascending',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'event', subtitle: 'date' },
  },
}
