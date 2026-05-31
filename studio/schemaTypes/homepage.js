export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  // Singleton — edited as one document (see structure in sanity.config.js)
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero title',
      description: 'Large text over the hero video',
      type: 'string',
      initialValue: 'B Ghost',
    },

    {
      name: 'heroVideo',
      title: 'Hero video',
      description: 'Optional. Overrides the default hero video. Autoplays muted & looped.',
      type: 'file',
      options: { accept: 'video/*' },
    },

    {
      name: 'heroImage',
      title: 'Hero image (fallback)',
      description:
        'Optional. Shown instead of a video if set and no hero video is uploaded.',
      type: 'image',
      options: { hotspot: true },
    },

    {
      name: 'socialLinks',
      title: 'Navigation links',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'instagramUrl', title: 'Instagram URL', type: 'url', initialValue: 'https://www.instagram.com/bghostinggg/' },
        { name: 'spotifyUrl', title: 'Spotify URL', type: 'url', initialValue: 'https://open.spotify.com/artist/0FOueJTXsoIjUxvJPQTPKQ' },
        { name: 'youtubeUrl', title: 'YouTube URL', type: 'url', initialValue: 'https://www.youtube.com/@BGhost' },
      ],
    },

    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'managementLabel', title: 'Management label', type: 'string', initialValue: 'Management' },
        { name: 'managementUrl', title: 'Management URL', type: 'url', initialValue: 'https://www.portminority.com/' },
        { name: 'contactEmail', title: 'Contact email', type: 'string', initialValue: 'talent@portminority.com' },
      ],
    },

    {
      name: 'release',
      title: 'Release card',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'availableLabel', title: 'Label', type: 'string', initialValue: 'Now available:' },
        { name: 'title', title: 'Release title', type: 'string', initialValue: "Demos I Shouldn't Release" },
        { name: 'url', title: 'Release URL', type: 'url', initialValue: 'https://open.spotify.com/album/4x68vPAEzHIvwDsnR9qyl1' },
        {
          name: 'image',
          title: 'Release image',
          description: 'Optional. Overrides the default ep.png cover.',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
}
