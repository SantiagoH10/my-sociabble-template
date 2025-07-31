// Reusable RapidAPI utility functions

/**
 * Make a call to any RapidAPI endpoint
 * @param {string} apiName - The API name (e.g., "lorem-ipsum-api")
 * @param {string} endpoint - The endpoint path (e.g., "/paragraph")
 * @param {Object} queryParams - Query parameters as key-value pairs
 * @param {string} method - HTTP method (default: 'GET')
 * @param {Object} body - Request body for POST/PUT requests
 * @returns {Promise<Object>} - The API response
 */

export async function callRapidAPI(
  apiName,
  endpoint,
  queryParams = {},
  method = 'GET',
  body = null,
) {
  const apiKey = process.env.RAPID_API_KEY

  if (!apiKey) {
    throw new Error('RAPID_API_KEY environment variable not configured')
  }

  // Build query string
  const queryString = new URLSearchParams(queryParams).toString()
  const url = `https://${apiName}.p.rapidapi.com${endpoint}${queryString ? `?${queryString}` : ''}`

  const options = {
    method,
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': `${apiName}.p.rapidapi.com`,
    },
  }

  // Add body for POST/PUT requests
  if (body && (method === 'POST' || method === 'PUT')) {
    options.headers['Content-Type'] = 'application/json'
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(
        `RapidAPI request failed: ${response.status} ${response.statusText}`,
      )
    }

    // Try to parse as JSON, fallback to text
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return await response.json()
    } else {
      const text = await response.text()
      try {
        return JSON.parse(text)
      } catch {
        return { text }
      }
    }
  } catch (error) {
    throw new Error(`RapidAPI call failed: ${error.message}`)
  }
}

/**
 * Create a Vercel handler for a specific RapidAPI endpoint
 * @param {string} apiName - The API name
 * @param {string} endpoint - The endpoint path
 * @param {Function} transformResponse - Optional function to transform the response
 * @param {Object} defaultParams - Default query parameters
 * @returns {Function} - Vercel handler function
 */

export function createRapidAPIHandler(
  apiName,
  endpoint,
  transformResponse = null,
  defaultParams = {},
) {
  return async function handler(req, res) {
    try {
      // Merge default params with request query params
      const queryParams = { ...defaultParams, ...req.query }

      // Support different HTTP methods
      const method = req.method || 'GET'
      const body = method !== 'GET' ? req.body : null

      // Call the RapidAPI
      const result = await callRapidAPI(
        apiName,
        endpoint,
        queryParams,
        method,
        body,
      )

      // Transform response if transformer provided
      const finalResult = transformResponse
        ? transformResponse(result, req)
        : result

      return res.status(200).json(finalResult)
    } catch (error) {
      console.error('RapidAPI Handler Error:', error)
      return res.status(500).json({
        error: 'API request failed',
        message: error.message,
      })
    }
  }
}

/**
 * Utility function to create standardized error responses
 */
export function createErrorResponse(message, statusCode = 500) {
  return {
    error: true,
    message,
    statusCode,
    timestamp: new Date().toISOString(),
  }
}

/**
 * Utility function to create standardized success responses
 */
export function createSuccessResponse(data, meta = {}) {
  return {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      ...meta,
    },
  }
}
