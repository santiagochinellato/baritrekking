import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const projectId = process.env.VITE_SANITY_PROJECT_ID || '4llw5v3d'
const dataset = process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.SANITY_ACCESS_TOKEN

if (!token) {
  console.error('Error: SANITY_ACCESS_TOKEN is missing')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2023-05-03',
  useCdn: false,
})

const SOCIAL_ITEMS = [
  // Stories (vertical 9:16)
  {
    type: "story",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1422&fit=crop",
    username: "Mountain Explorer",
    handle: "@bari.trekking",
  },
  {
    type: "story",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1422&fit=crop",
    username: "Summit Views",
    handle: "@bari.trekking",
  },
  {
    type: "story",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=1422&fit=crop",
    username: "Trail Adventures",
    handle: "@bari.trekking",
  },
  {
    type: "story",
    imageUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=1422&fit=crop",
    username: "Alpine Life",
    handle: "@bari.trekking",
  },
  {
    type: "story",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=1422&fit=crop",
    username: "Peak Moments",
    handle: "@bari.trekking",
  },
  {
    type: "story",
    imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=1422&fit=crop",
    username: "Wild Trails",
    handle: "@bari.trekking",
  },
  // Posts (square 1:1)
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=800&fit=crop",
    username: "Community Vibes",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&h=800&fit=crop",
    username: "Group Hikes",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=800&fit=crop",
    username: "Nature Lovers",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=800&fit=crop",
    username: "Sunset Peaks",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800&h=800&fit=crop",
    username: "Trail Friends",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
    username: "Adventure Squad",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop",
    username: "Mountain Crew",
    handle: "@bari.trekking",
  },
  {
    type: "post",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=800&fit=crop",
    username: "Trekking Life",
    handle: "@bari.trekking",
  },
];

async function uploadImage(url) {
  try {
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    const asset = await client.assets.upload('image', Buffer.from(buffer))
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error(`Failed to upload image ${url}:`, error.message)
    return null
  }
}

async function migrate() {
  console.log('Starting Social Wall migration...')
  
  const items = []
  
  for (const item of SOCIAL_ITEMS) {
    console.log(`Processing ${item.type} by ${item.username}...`)
    const imageAsset = await uploadImage(item.imageUrl)
    
    if (imageAsset) {
      items.push({
        _key: Math.random().toString(36).substring(7),
        type: item.type,
        username: item.username,
        handle: item.handle,
        image: imageAsset
      })
    }
  }

  await client.createOrReplace({
    _id: 'social-wall-content',
    _type: 'socialWall',
    title: 'Nuestra Comunidad en Acción',
    subtitle: 'Compartimos momentos reales de nuestras aventuras en la montaña y encuentros sociales.',
    items: items
  })

  console.log('Social Wall migration completed!')
}

migrate().catch(console.error)
