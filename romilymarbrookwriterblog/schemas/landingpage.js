export default {
  name: 'landingpage',
  type: 'document',
  title: 'Landing Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
