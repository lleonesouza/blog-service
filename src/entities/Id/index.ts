import cuid from 'cuid'

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid
})

export default Id