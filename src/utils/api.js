//API Calling functions

async function getLoremIpsum(amount = 1) {
  try {
    const response = await fetch(`/api/lorem-ipsum?amount=${amount}`)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'API call failed')
    }

    return data
  } catch (error) {
    console.error('Error fetching:', error)
    throw error
  }
}
