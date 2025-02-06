// import { UserIcon } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const auther = defineType({
  name: 'auther',
  title: 'Auther',
  type: 'document',
  // icon:UserIcon,
  fields: [
    defineField({
      name: 'id',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'username',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
  ],
  preview:{
    select: {
        title:'name'
    }
  }
})