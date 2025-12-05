
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { basename } from 'path'

// Client configuration - assumes running from studio folder or root with access to process.env or sanity.cli.ts context
// But since this is a standalone script, we need to initialize a client.
// We'll use the projectId and dataset from the environment or hardcode them based on inspection if needed,
// but better to rely on sanity exec providing the client or context.
// 'sanity exec' provides a configured client in the context usually, but let's use the standard client import.

// Note: To run this script, use: npx sanity exec scripts/migrate-content.ts --with-user-token

import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2023-05-03' })

const logoUrl = "https://i.ibb.co/LfhB81V/btLogo.webp"

async function fetchImage(url: string) {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  return Buffer.from(buffer)
}

async function uploadImageAttribute(url: string) {
  console.log(`Fetching image from ${url}...`)
  const buffer = await fetchImage(url)
  console.log('Uploading image asset...')
  const asset = await client.assets.upload('image', buffer, {
    filename: 'btLogo.webp'
  })
  console.log(`Image uploaded. Asset ID: ${asset._id}`)
  return asset._id
}

async function migrate() {
  try {
    console.log('Starting migration...')
    
    // Upload Logo
    const logoAssetId = await uploadImageAttribute(logoUrl)

    // Navbar Data
    const navbarData = {
      _type: 'navbar',
      _id: 'navbar-singleton', // Use a fixed ID to avoid duplicates
      title: 'Main Navbar',
      logo: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: logoAssetId
        }
      },
      links: [
        { _key: '1', name: "Inicio", href: "#hero" },
        { _key: '2', name: "Manifiesto", href: "#manifesto" },
        { _key: '3', name: "Espacios", href: "#groups" },
      ],
      cta: {
        text: "Unirme Ahora",
        link: "#"
      }
    }

    // Footer Data
    const footerData = {
      _type: 'footer',
      _id: 'footer-singleton',
      title: 'Main Footer',
      logo: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: logoAssetId
        }
      },
      description: "Comunidad de trekking en la Patagonia. Explorando senderos, respetando la naturaleza.",
      linkColumns: [
        {
          _key: 'col1',
          title: "Enlaces",
          links: [
            { _key: 'l1', text: "Inicio", href: "#" },
            { _key: 'l2', text: "Planes", href: "#" },
            { _key: 'l3', text: "Registro", href: "#" },
            { _key: 'l4', text: "FAQ", href: "#" },
          ]
        },
        {
          _key: 'col2',
          title: "Legal",
          links: [
            { _key: 'l5', text: "Términos y Condiciones", href: "#" },
            { _key: 'l6', text: "Política de Privacidad", href: "#" },
            { _key: 'l7', text: "Protocolo de Seguridad", href: "#" },
          ]
        }
      ],
      socialLinks: [
        { _key: 's1', platform: "instagram", url: "https://www.instagram.com/bari.trekking" },
        { _key: 's2', platform: "whatsapp", url: "https://wa.me/5492944123456" },
      ],
      followText: "Seguinos en Instagram para ver fotos de nuestras salidas",
      copyrightText: `© ${new Date().getFullYear()} Bari.Trekking. Todos los derechos reservados.`,
      developer: {
        name: "Santiago Chinellato",
        url: "https://portfolio-santiago-chinellato.vercel.app/"
      }
    }

    // Create or Replace Navbar
    console.log('Creating/Updating Navbar...')
    await client.createOrReplace(navbarData)
    console.log('Navbar created/updated.')

    // Create or Replace Footer
    console.log('Creating/Updating Footer...')
    await client.createOrReplace(footerData)
    console.log('Footer created/updated.')

    console.log('Migration completed successfully!')
  } catch (err) {
    console.error('Migration failed:', err)
    process.exit(1)
  }
}

migrate()
