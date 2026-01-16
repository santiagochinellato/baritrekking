
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2023-05-03' })

async function updateLevels() {
  const groupsDocs = await client.fetch('*[_type == "groups"]')
  
  if (groupsDocs.length === 0) {
    console.error('No groups document found.')
    return
  }

  const doc = groupsDocs[0]
  console.log(`Updating document: ${doc._id}`)

  // Default levels to add if missing
  const levels = ["🥾 Principiantes", "⛰️ Intermedios", "🏔️ Avanzados"]

  try {
    const res = await client
      .patch(doc._id)
      .setIfMissing({ 'trekkingCard.levels': levels }) 
      .commit()
    
    console.log('Update successful:', res)
  } catch (err) {
    console.error('Update failed:', err)
  }
}

updateLevels()
