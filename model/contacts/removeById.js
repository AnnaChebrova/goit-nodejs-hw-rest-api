const getAll = require('./getAll')
const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'contacts.json')

const removeById = async (id) => {
  const contacts = await getAll()

  const idx = contacts.findIndex((c) => String(c.id) === String(id))
  if (idx === -1) {
    return null
  }
  const removeContact = contacts.splice(idx, 1)

  const contactsStr = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactsStr)

  return removeContact
}

module.exports = removeById
