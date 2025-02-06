import { type SchemaTypeDefinition } from 'sanity'
import { auther } from './auther'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [auther,startup],
}
