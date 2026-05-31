import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'tabkldbj',
    dataset: 'production',
  },
  // The hostname for your hosted studio: https://bghost.sanity.studio
  studioHost: 'bghost',
})
