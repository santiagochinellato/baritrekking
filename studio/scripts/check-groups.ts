
import { getCliClient } from 'sanity/cli'
const client = getCliClient({ apiVersion: '2023-05-03' })

async function checkGroups() {
  const groups = await client.fetch('*[_type == "groups"]{_id, _createdAt, title, subtitle}')
  console.log('--- GROUPS IN DB ---')
  console.table(groups)
}

checkGroups()
