import { createRapidAPIHandler } from '../lib/rapidapi.js'

// Transform function to shape the response
const transformer = result => ({
  title: 'Lorem Ipsum',
  typeString: result.text || result,
})

// Create handler with default parameters
export default createRapidAPIHandler(
  'lorem-ipsum-api', // API name
  '/paragraph', // Endpoint
  transformer, // Response transformer
  { amount: 1 }, // Default parameters
)
