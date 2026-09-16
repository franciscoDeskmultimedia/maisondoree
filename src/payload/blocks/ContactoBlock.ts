import type { Block } from 'payload'

export const ContactoBlock: Block = {
  slug: 'contactoBlock',
  labels: {
    singular: 'Contacto / Distribuidor Block',
    plural: 'Contacto / Distribuidor Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'TRABAJEMOS JUNTOS',
      label: 'Eyebrow (Texto Superior)',
    },
    {
      name: 'title',
      type: 'textarea',
      defaultValue: '¿QUIERES VENDER\nNUESTROS PRODUCTOS?',
      label: 'Título',
    },
    {
      name: 'sub',
      type: 'textarea',
      defaultValue: 'Déjanos tus datos y nos pondremos en contacto contigo.',
      label: 'Subtítulo',
    },
    {
      name: 'formAction',
      type: 'text',
      defaultValue: 'https://formsubmit.co/maisondoreeliqueur@gmail.com',
      label: 'Form Action URL (FormSubmit u otro endpoint)',
    },
    {
      name: 'subject',
      type: 'text',
      defaultValue: 'Nuevo interesado en distribuir Maison Dorée',
      label: 'Asunto de Correo',
    },
    {
      name: 'submitText',
      type: 'text',
      defaultValue: 'ENVIAR',
      label: 'Texto Botón Enviar',
    },
  ],
}
