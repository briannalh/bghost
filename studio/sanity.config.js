import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'B Ghost',

  projectId: 'tabkldbj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .id('homepage')
              .child(
                S.document().schemaType('homepage').documentId('homepage')
              ),
            S.documentTypeListItem('tourDate').title('Tour Dates'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
