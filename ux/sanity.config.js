import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ux',

  projectId: '3p9ylh2a',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),   
    
  ],

  schema: {
    types: schemaTypes,
  },
})
