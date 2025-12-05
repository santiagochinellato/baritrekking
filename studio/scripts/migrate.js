import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

// Helper to get directory name in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// Configuration
// Try to get token from args or env
const projectId = process.env.VITE_SANITY_PROJECT_ID || '4llw5v3d'
const dataset = process.env.VITE_SANITY_DATASET || 'production'
// Using a hardcoded token for this session since passing env vars in terminal can be tricky
// Ideally we should use process.env.SANITY_ACCESS_TOKEN
// For now, I will ask you to login via CLI which puts the token in a different place usually, 
// OR we use the @sanity/client which works with the token passed.

// NOTE: Running "sanity exec" might be easier as it handles config. 
// But let's try to make a standalone script that just works with what we have.

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_ACCESS_TOKEN, // Expectations: User sets this env var
})

async function uploadImage(filePath) {
  try {
    console.log(`Uploading image: ${filePath}`)
    if (filePath.startsWith('http')) {
        // Fetch remote image
        const response = await fetch(filePath)
        const buffer = await response.arrayBuffer()
        const asset = await client.assets.upload('image', Buffer.from(buffer))
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id
            }
        }
    } else {
        // Local file
        const absolutePath = path.resolve(__dirname, '../../', filePath)
        if (!fs.existsSync(absolutePath)) {
            console.warn(`File not found: ${absolutePath}`)
            return null
        }
        const stream = fs.createReadStream(absolutePath)
        const asset = await client.assets.upload('image', stream)
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id
            }
        }
    }
  } catch (error) {
    console.error(`Failed to upload image ${filePath}:`, error.message)
    return null
  }
}

async function migrate() {
  console.log('Starting migration...')

  // 1. Hero
  console.log('Migrating Hero...')
  const heroImage = await uploadImage('public/realHero.webp')
  await client.createOrReplace({
    _id: 'hero-content',
    _type: 'hero',
    title: 'CONECTAR COMPARTIR SER COMUNIDAD', // Simple string for now
    subtitle: 'Somos residentes de Bariloche creando un espacio para encontrarnos, caminar y compartir experiencias.',
    ctaText: 'Explorá la Comunidad',
    backgroundImage: heroImage
  })

  // 2. Manifesto
  console.log('Migrating Manifesto...')
  await client.createOrReplace({
    _id: 'manifesto-content',
    _type: 'manifesto',
    title: 'Volver a lo Simple',
    description: 'Bari.Trekking nace de la necesidad de conectar con la montaña, conocer gente real y generar vínculos genuinos.',
    highlight: 'No somos una empresa. Somos una comunidad.',
    values: [
      {
        title: 'Comunidad Real',
        description: 'Facilitamos encuentros reales en la naturaleza y en la vida cotidiana. Sin guías, construyendo entre todos.',
        icon: 'Users'
      },
      {
        title: 'Valores Claros',
        description: 'Respeto, Compromiso, Responsabilidad y Comunicación son los pilares que sostienen nuestro espacio.',
        icon: 'Heart'
      },
      {
        title: 'Autonomía',
        description: 'Cada miembro es responsable de su seguridad, equipo y decisiones. Promovemos la montaña consciente.',
        icon: 'Mountain'
      }
    ],
    requirementsTitle: '¿Quiénes pueden sumarse?',
    requirementsIntro: 'Para mantener la esencia de nuestro grupo, tenemos algunos requisitos simples pero fundamentales:',
    requirementsList: [
      'Vivir en Bariloche o Dina Huapi',
      'Respetar normas de convivencia y cuidado mutuo',
      'Cuidar el entorno y no dejar rastro',
      'Ser responsable de tu propia seguridad y equipo',
      'Aportar buena energía y ganas de participar'
    ]
  })

  // 3. Groups
  console.log('Migrating Groups...')
  const trekkingImage = await uploadImage('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070')
  await client.createOrReplace({
    _id: 'groups-content',
    _type: 'groups',
    title: 'Nuestros Espacios',
    subtitle: 'Trekking gratuito para todos, club social con membresía opcional.',
    trekkingCard: {
      title: 'Trekking Principal',
      description: 'El corazón de Bari.Trekking. Organizamos salidas todo el año para todos los niveles. Descubrí senderos, conocé gente nueva y disfrutá de la montaña.',
      badge: 'Acceso Libre / Gratuito',
      image: trekkingImage,
      levels: ['🥾 Principiantes', '⛰️ Intermedios', '🏔️ Avanzados'],
      stats: [
        { label: 'Salidas', value: '200+', icon: 'Mountain' },
        { label: 'Miembros', value: '1034', icon: 'Users' },
        { label: 'Eventos', value: '120', icon: 'Calendar' },
        { label: 'Cursos', value: '10', icon: 'GraduationCap' },
        { label: 'Acciones', value: '8', icon: 'Heart' }
      ]
    },
    socialCard: {
      title: 'Club Social & Beneficios',
      badge: 'MEMBRESÍA OPCIONAL',
      description: 'Accedé a todos los grupos de vida social',
      price: '$5.000',
      benefits: [
        { name: 'Bari.Wine', emoji: '🍷', desc: 'Catas de vino' },
        { name: 'Relax Time', emoji: '🧉', desc: 'Mates y eventos' },
        { name: 'Bari.Bienestar', emoji: '🧘🏻‍♀️', desc: 'Yoga y meditación' },
        { name: 'Bari.Red', emoji: '🤝', desc: 'Red de apoyo' }
      ]
    },
    preventionCard: {
      title: 'Prevención y Seguridad',
      description: 'Espacio dedicado a aprender y cuidarnos. Info sobre equipamiento, clima y seguridad en montaña.',
      tagline: 'Tu seguridad es prioridad'
    },
    communityCard: {
      title: 'Comunidad',
      description: 'Acciones voluntarias, cuidado del entorno y proyectos colaborativos. \nPorque la montaña se disfruta más cuando la cuidamos entre todos.',
      tagline: 'Juntos hacemos más'
    }
  })

  // 4. FAQ
  console.log('Migrating FAQ...')
  await client.createOrReplace({
    _id: 'faq-content',
    _type: 'faq',
    title: 'Preguntas Frecuentes',
    subtitle: 'Todo lo que necesitás saber antes de sumarte.',
    questions: [
      {
        question: '¿Necesito experiencia previa para sumarme?',
        answer: 'No es necesaria experiencia para el grupo de Trekking Principal. Organizamos salidas para todos los niveles, desde principiantes hasta avanzados. Lo importante es tener ganas de aprender y respetar tu propio ritmo.'
      },
      {
        question: '¿Qué equipo necesito para empezar?',
        answer: 'Para iniciar, necesitás: calzado de trekking cómodo, ropa por capas (térmica, abrigo, impermeable), mochila de 20-30L, agua, comida energética y protección solar. En el grupo de Prevención compartimos listas detalladas según la salida.'
      },
      {
        question: '¿Cómo son las salidas de trekking?',
        answer: 'Los miembros proponen salidas en el grupo y cada uno decide a cuál sumarse según su nivel. No hay guías oficiales, cada uno es responsable de su seguridad. Compartimos información del sendero, clima y punto de encuentro.'
      },
      {
        question: '¿Qué incluye la Membresía Social de $5.000?',
        answer: 'Accedés a todos los grupos sociales: Relax Time (mates, afters, eventos), Bari.Wine (catas), Bari.Bienestar (yoga, meditación), Bari.Red (red de apoyo) y Comunidad (acciones voluntarias). Es solo para grupos sociales, el Trekking Principal es siempre gratuito.'
      },
      {
        question: '¿Puedo cancelar la membresía cuando quiera?',
        answer: 'Sí, podés darte de baja en cualquier momento. La membresía es mensual sin permanencia.'
      },
      {
        question: '¿Hay seguro en las actividades?',
        answer: 'No. Cada participante es responsable de su propia seguridad y debe contar con obra social o prepaga. Recomendamos informarse sobre seguros adicionales para actividades de montaña.'
      }
    ]
  })

  console.log('Migration completed successfully!')
}

migrate().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
