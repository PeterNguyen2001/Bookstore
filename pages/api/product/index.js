import prisma from '../../../lib/prisma'

async function getMethod(req, res) {}

export default function helloAPI(req, res) {
  var { id } = req.query
  if (!id) {
    return prisma.product.findMany().then((result) => {
      res.status(200).json(result)
    })
  } else {
    return prisma.product
      .findUnique({
        where: {
          id,
        },
      })
      .then((result) => res.status(200).json(result))
  }
}
