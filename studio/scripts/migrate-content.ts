
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
        { _key: '921252ed4f47', name: "Requisitos", href: "#requisitos" },
        { _key: 'ffc2471a98f3', name: "El sendero", href: "#sendero" },
        { _key: '3', name: "Espacios", href: "#groups" },
        { _key: '159e2ef2f544', name: "Social wall", href: "#social-wall" },
        { _key: 'b174acdf6683', name: "Preguntas frecuentes", href: "#FAQ" }
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
      followText: "Seguinos en Instagram para explorar nuestras salidas",
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

    // Groups Data
    const trekkingImageUrl = "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070";
    const trekkingAssetId = await uploadImageAttribute(trekkingImageUrl);

    const groupsData = {
      _type: 'groups',
      _id: 'groups-singleton',
      title: "Nuestros Espacios",
      subtitle: "Trekking gratuito para todos, club social con membresía opcional.",
      trekkingCard: {
        title: "Trekking Principal",
        description: "El corazón de Bari.Trekking. Organizamos salidas todo el año para todos los niveles. Descubrí senderos, conocé gente nueva y disfrutá de la montaña.",
        badge: "Acceso Libre / Gratuito",
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: trekkingAssetId }
        },
        levels: ["🥾 Principiantes", "⛰️ Intermedios", "🏔️ Avanzados"],
        stats: [
          { _key: 's1', label: "Salidas", value: "200+", icon: "Mountain" },
          { _key: 's2', label: "Miembros", value: "1034", icon: "Users" },
          { _key: 's3', label: "Eventos", value: "120", icon: "Calendar" },
          { _key: 's4', label: "Cursos", value: "10", icon: "GraduationCap" },
          { _key: 's5', label: "Acciones", value: "8", icon: "Heart" },
        ],
        buttonText: "Sumarme a las Salidas",
        buttonLink: "#"
      },
      socialCard: {
        title: "Club Social & Beneficios",
        badge: "MEMBRESÍA OPCIONAL",
        description: "Accedé a todos los grupos de vida social",
        price: "$5.000",
        benefits: [
          { _key: 'b1', name: "Bari.Wine", emoji: "🍷", desc: "Catas de vino" },
          { _key: 'b2', name: "Relax Time", emoji: "🧉", desc: "Mates y eventos" },
          { _key: 'b3', name: "Bari.Bienestar", emoji: "🧘🏻‍♀️", desc: "Yoga y meditación" },
          { _key: 'b4', name: "Bari.Red", emoji: "🤝", desc: "Red de apoyo" },
        ],
        buttonText: "Quiero mi Membresía",
        buttonLink: "#"
      },
      preventionCard: {
        title: "Prevención y Seguridad",
        description: "Espacio dedicado a aprender y cuidarnos. Info sobre equipamiento, clima y seguridad en montaña.",
        tagline: "Tu seguridad es prioridad"
      },
      communityCard: {
        title: "Comunidad",
        description: "Acciones voluntarias, cuidado del entorno y proyectos colaborativos. \nPorque la montaña se disfruta más cuando la cuidamos entre todos.",
        tagline: "Juntos hacemos más"
      }
    };

    // Manifesto Data
    const manifestoData = {
      _type: 'manifesto',
      _id: 'manifesto-singleton',
      title: "Volver a lo Simple",
      description: "Bari.Trekking nace de la necesidad de conectar con la montaña, conocer gente real y generar vínculos genuinos.",
      highlight: "No somos una empresa. Somos una comunidad.",
      values: [
        {
          _key: 'v1',
          title: "Comunidad Real",
          description: "Gereramos espacios que facilitan encuentros reales en la naturaleza y en la vida cotidiana con el aporte de cada integrante.",
          icon: "Users"
        },
        {
          _key: 'v2',
          title: "Actividades autogestivas",
          description: "Formada por Residentes de Bariloche, donde cada salida la propone un miembro y cada uno es responsable de su seguridad y cuidado.",
          icon: "Map"
        },
        {
          _key: 'v3',
          title: "Valores Claros",
          description: "Funcionamos desde valores que cuidan el espacio: Respeto, Compromiso, Responsabilidad y Comunicación.",
          icon: "Heart"
        },
        {
          _key: 'v4',
          title: "Autonomía responsable",
          description: "Cada miembro es responsable de su seguridad, equipo y decisiones. Promovemos el respeto entre Miembros y con la Naturaleza.",
          icon: "Shield"
        }
      ],
      requirementsTitle: "¿Quiénes pueden sumarse?",
      requirementsIntro: "Para mantener la esencia de nuestro grupo, tenemos algunos requisitos simples pero fundamentales:",
      requirementsList: [
        "Vivir en Bariloche o Dina Huapi",
        "Respetar normas de convivencia y cuidado mutuo",
        "Cuidar el entorno y no dejar rastro",
        "Ser responsable de tu propia seguridad y equipo",
        "Aportar buena energía y ganas de participar"
      ],
      ctaText: "¿Cumplís los requisitos? Sumate Ahora",
      ctaLink: "#"
    };

    // FAQ Data
    const faqData = {
      _type: 'faq',
      _id: 'faq-singleton',
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitás saber antes de sumarte.",
      questions: [
        {
          _key: 'q1',
          question: "¿Necesito experiencia previa para sumarme?",
          answer: "No es necesaria experiencia para el grupo de Trekking Principal. Organizamos salidas para todos los niveles, desde principiantes hasta avanzados. Lo importante es tener ganas de aprender y respetar tu propio ritmo."
        },
        {
          _key: 'q2',
          question: "¿Qué equipo necesito para empezar?",
          answer: "Para iniciar, necesitás: calzado de trekking cómodo, ropa por capas (térmica, abrigo, impermeable), mochila de 20-30L, agua, comida energética y protección solar. En el grupo de Prevención compartimos listas detalladas según la salida."
        },
        {
          _key: 'q3',
          question: "¿Cómo son las salidas de trekking?",
          answer: "Los miembros proponen salidas en el grupo y cada uno decide a cuál sumarse según su nivel. No hay guías oficiales, cada uno es responsable de su seguridad. Compartimos información del sendero, clima y punto de encuentro."
        },
        {
          _key: 'q4',
          question: "¿Qué incluye la Membresía Social de $5.000?",
          answer: "Accedés a todos los grupos sociales: Relax Time (mates, afters, eventos), Bari.Wine (catas), Bari.Bienestar (yoga, meditación), Bari.Red (red de apoyo) y Comunidad (acciones voluntarias). Es solo para grupos sociales, el Trekking Principal es siempre gratuito."
        },
        {
          _key: 'q5',
          question: "¿Puedo cancelar la membresía cuando quiera?",
          answer: "Sí, podés darte de baja en cualquier momento. La membresía es mensual sin permanencia."
        },
        {
          _key: 'q6',
          question: "¿Hay seguro en las actividades?",
          answer: "No. Cada participante es responsable de su propia seguridad y debe contar con obra social o prepaga. Recomendamos informarse sobre seguros adicionales para actividades de montaña."
        }
      ]
    };

    // Community CTA Data
    const communityCTAData = {
      _type: 'communityCTA',
      _id: 'communityCTA-singleton',
      title: "¿Listo para ser parte?",
      description: "Sumate a la comunidad más social y hermosa de Bariloche.",
      buttonText: "Quiero ser parte",
      buttonLink: "#"
    };

    // How It Works Data
    const howItWorksData = {
      _type: 'howItWorks',
      _id: 'howItWorks-singleton',
      title: 'El Sendero',
      subtitle: 'Cómo funciona nuestra comunidad, paso a paso.',
      steps: [
        "Te sumás a los grupos en los que quieras participar.",
        "Los miembros publican salidas y actividades: trekking, caminatas, mates, catas de vinos, encuentros y propuestas sociales.",
        "Vos elegís libremente a qué sumarte o incluso podés proponer tu propia actividad.",
        "Moderamos los grupos para que estén ordenados y no sean un caos de mensajes.",
        "Cuidamos el ambiente del grupo: si alguien no respeta normas o valores, puede ser removido.",
        "Cada persona es responsable de sí misma: su nivel, su seguridad y su preparación. No hay guías oficiales."
      ],
      policies: [
        "Moderamos los grupos para que solo recibas info relevante de las salidas.",
        "La montaña es nuestra casa. Volvemos con la basura y respetamos la flora y fauna sin excepción.",
        "No somos guías. Vos sos responsable de tu seguridad y equipo."
      ]
    };

    // SEO Settings Data
    const settingsData = {
      _type: 'settings',
      _id: 'settings',
      title: "Bari.Trekking | Comunidad de Montaña en Bariloche",
      description:
        "Únete a Bari.Trekking, la comunidad de entusiastas del trekking en Bariloche, Argentina. Descubre senderos, comparte experiencias y conecta con la naturaleza en la Patagonia.",
      keywords: [
        "Trekking Bariloche",
        "Senderismo Patagonia",
        "Comunidad Outdoor",
        "Turismo Activo",
        "Montaña Argentina",
        "Excursiones Bariloche",
      ],
      ogImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: logoAssetId,
        },
      },
    };

    // Create or Replace Documents
    console.log('Creating/Updating Groups...')
    await client.createOrReplace(groupsData)
    
    console.log('Creating/Updating Manifesto...')
    await client.createOrReplace(manifestoData)

    console.log('Creating/Updating FAQ...')
    await client.createOrReplace(faqData)

    console.log('Creating/Updating Community CTA...')
    await client.createOrReplace(communityCTAData)

    console.log('Creating/Updating How It Works...')
    await client.createOrReplace(howItWorksData)

    console.log('Creating/Updating SEO Settings...')
    await client.createOrReplace(settingsData)

    console.log('Migration completed successfully!')
  } catch (err) {
    console.error('Migration failed:', err)
    process.exit(1)
  }
}

migrate()

