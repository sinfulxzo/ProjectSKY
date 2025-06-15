 const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const authRoutes = require('./routes/auth')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', authRoutes)

const PORT = process.env.PORT || 5200
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})

const progressRoutes = require('./routes/progress')
app.use('/api/progress', progressRoutes)

