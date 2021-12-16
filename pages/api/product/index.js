import prisma from '../../../lib/prisma'

async function getMethod(req, res) {
  var { id } = req.query
  if (!id) {
    prisma.product.findMany().then((result) => {
      res.status(200).json(result)
    })
  } else {
    prisma.product
      .findUnique({
        where: {
          id,
        },
      })
      .then((result) => res.status(200).json(result))
  }
}

export default function helloAPI(req, res) {
  switch (req.method) {
    case 'GET':
      getMethod(req, res)
      break
  }
}
