
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2023-05-03' })

async function fetchCurrentData() {
  try {
    const navbar = await client.fetch('*[_id == "navbar-singleton"][0]')
    const footer = await client.fetch('*[_id == "footer-singleton"][0]')
    const groups = await client.fetch('*[_id == "groups-singleton"][0]')
    const faq = await client.fetch('*[_id == "faq-singleton"][0]')
    const communityCTA = await client.fetch('*[_id == "communityCTA-singleton"][0]')
    const howItWorks = await client.fetch('*[_id == "howItWorks-singleton"][0]')
    const settings = await client.fetch('*[_id == "settings"][0]')

    console.log('---START DATA---')
    console.log(JSON.stringify({
      howItWorks
    }, null, 2))
    console.log('---END DATA---')
  } catch (err) {
    console.error('Error fetching data:', err)
  }
}

fetchCurrentData()
