const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getProgress = async (req, res) => {
  try {
    const progress = await prisma.progress.findMany({
      where: { userId: req.user.userId },
      orderBy: { updatedAt: 'desc' }
    })
    res.json(progress)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
}

// Optional: Admin route to add progress for a user
exports.createProgress = async (req, res) => {
  const { title, status, note, userId } = req.body

  try {
    const progress = await prisma.progress.create({
      data: { title, status, note, userId }
    })
    res.status(201).json(progress)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not create progress' })
  }
}
