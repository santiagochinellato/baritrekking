
import { getCliClient } from 'sanity/cli'
const client = getCliClient({ apiVersion: '2023-05-03' })

async function inspectData() {
  const groupsDocs = await client.fetch('*[_type == "groups"]')
  if (!groupsDocs.length) return console.log('No groups doc found')
  
  const doc = groupsDocs[0]
  console.log('--- REMOTE DATA ---')
  console.log('ID:', doc._id)
  console.log('Levels:', doc.trekkingCard?.levels)
  console.log('Full Trekking Card:', JSON.stringify(doc.trekkingCard, null, 2))
}

inspectData()
