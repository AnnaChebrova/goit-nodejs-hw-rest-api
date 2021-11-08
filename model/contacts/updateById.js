const getAll = require('./getAll')

const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'contacts.json')

const updateById = async (id, data) => {
  const contacts = await getAll()
  const idx = contacts.findIndex((c) => String(c.id) === String(id))
  if (idx === -1) {
    return null
  }
  contacts[idx] = { ...data, id }

  const contactsStr = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactsStr)

  return contacts[idx]
}

module.exports = updateById
