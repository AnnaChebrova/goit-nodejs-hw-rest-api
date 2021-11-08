const fs = require('fs/promises')
const getAll = require('./getAll')
const { v4 } = require('uuid')
const path = require('path')
const contactsPath = path.join(__dirname, 'contacts.json')

const add = async (data) => {
  const contacts = await getAll()
  const newContact = { ...data, id: v4() }
  contacts.push(newContact)
  const contactsStr = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactsStr)
  return newContact
}

module.exports = add
