import { defineField, defineType } from 'sanity'

export const howItWorks = defineType({
  name: 'howItWorks',
  title: 'How It Works (El Sendero)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'El Sendero',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      initialValue: 'Cómo funciona nuestra comunidad, paso a paso.',
    }),
    defineField({
      name: 'steps',
      title: 'Steps (Timeline)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The first 6 items for the vertical timeline.',
      initialValue: [
        "Te sumás a los grupos en los que quieras participar.",
        "Los miembros publican salidas y actividades: trekking, caminatas, mates, catas de vinos, encuentros y propuestas sociales.",
        "Vos elegís libremente a qué sumarte o incluso podés proponer tu propia actividad.",
      ],
    }),
    defineField({
      name: 'policies',
      title: 'Policies (Bottom Grid)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The items for the "Lo que tenés que saber" section.',
      initialValue: [
         "Moderamos los grupos para que estén ordenados y no sean un caos de mensajes.",
         "Cuidamos el ambiente del grupo: si alguien no respeta normas o valores, puede ser removido.",
         "Cada persona es responsable de sí misma: su nivel, su seguridad y su preparación. No hay guías oficiales.",
      ],
    }),
  ],
})
