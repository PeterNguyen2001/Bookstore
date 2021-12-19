// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../lib/prisma'

export default function helloAPI(req, res) {
  if (req.method === 'GET') {
    var result = null
    try {
      prisma.product.findUnique({
        where: {
          id: req.query.id,
        },
      })
    } catch (e) {
      next(e)
      return null
    }
    res.status(200).json(result)
  }
}
