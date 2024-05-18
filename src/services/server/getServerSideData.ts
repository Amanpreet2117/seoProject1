import { baseURL } from "../client/apiConfig"

async function getServerSideData(endpoint: string) {

  const res = await fetch(`${baseURL}${endpoint}`, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getServerSideCachedData(endpoint: string) {

  const res = await fetch(`${baseURL}${endpoint}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export {
  getServerSideData,
  getServerSideCachedData
}
