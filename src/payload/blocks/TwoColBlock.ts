import type { Block } from 'payload'

export const ImageSubBlock: Block = {
  slug: 'imageBlock',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  fields: [
    {
      name: 'image',
      label: 'Image (Upload from Media Library)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageUrl',
      label: 'Image URL (Fallback if not using media library)',
      type: 'text',
      defaultValue: '/images/saint-manicho.jpg',
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      defaultValue: 'Maison Dorée',
    },
  ],
}

export const CardSubBlock: Block = {
  slug: 'cardBlock',
  labels: {
    singular: 'Card',
    plural: 'Cards',
  },
  fields: [
    {
      name: 'tag',
      label: 'Tag / Eyebrow (e.g. NUEVO SABOR)',
      type: 'text',
      defaultValue: 'NUEVO SABOR',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      defaultValue: 'Saint Manicho',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      defaultValue: 'La fusión perfecta entre el rompope tradicional manabita y el irresistible sabor del chocolate Manicho.',
    },
    {
      name: 'ctaLabel',
      label: 'Button Label',
      type: 'text',
      defaultValue: 'DESCUBRE MÁS',
    },
    {
      name: 'ctaUrl',
      label: 'Button URL',
      type: 'text',
      defaultValue: 'https://wa.me/593985504731',
    },
    {
      name: 'image',
      label: 'Card Image (Optional)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageUrl',
      label: 'Card Image URL (Fallback)',
      type: 'text',
    },
    {
      name: 'theme',
      label: 'Card Style',
      type: 'select',
      defaultValue: 'maroon',
      options: [
        { label: 'Maroon Glow', value: 'maroon' },
        { label: 'Deep Dark', value: 'dark' },
        { label: 'Cream Elegance', value: 'cream' },
      ],
    },
  ],
}

export const TwoColBlock: Block = {
  slug: 'twoColBlock',
  interfaceName: 'TwoColBlock',
  labels: {
    singular: 'Two Col',
    plural: 'Two Col Blocks',
  },
  fields: [
    {
      name: 'columns',
      label: 'Columns (Select up to 2: Image or Card)',
      type: 'blocks',
      maxRows: 2,
      blocks: [ImageSubBlock, CardSubBlock],
    },
    // Optional legacy fallback fields for backward compatibility
    {
      name: 'imagePath',
      label: 'Legacy Image Path (Used if no columns added)',
      type: 'text',
      defaultValue: '/images/saint-manicho.jpg',
      admin: {
        description: 'Optional fallback: used if no column blocks are added above.',
      },
    },
    {
      name: 'altText',
      label: 'Legacy Alt Text',
      type: 'text',
      defaultValue: 'Prueba el nuevo sabor Saint Manicho',
    },
  ],
}
