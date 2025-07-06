const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover What Makes {name} a Local Favorite in {location}",
  "{name}: The Talk of {location}'s Business Scene",
  "Unveiling {location}'s Hidden Gem: {name}",
  "{name} is Redefining Local Business in {location}"
]

function generateHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)]
  return template.replace("{name}", name).replace("{location}", location)
}

app.post('/business-data', (req, res) => {
  const { name, location } = req.body
  const data = {
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 300 + 1),
    headline: generateHeadline(name, location),
  }
  res.json(data)
})

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query
  const headline = generateHeadline(name, location)
  res.json({ headline })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
