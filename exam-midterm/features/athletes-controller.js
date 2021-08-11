const { db } = require('../_services/firebase-admin-initialized')

const athleteCreateForm = async (req, res) => {
  res.render('athlete-create-form')
}

const athleteList = async (req, res) => {
  const query = db.collection('athletes')
    .orderBy('name')
    .get()
  const athletesList = (await query).docs.map(doc => doc.data())

  res.render('athletes-list', { athletesList })
}
const athleteDetails = async (req, res) => {
  const slug = req.params.slug

  const query = db.collection('athletes')
    .doc(slug)
    .get()
  const athleteDetails = (await query).data()
  res.render('athletes-details', { athleteDetails })
}

const athleteSchedule = async (req, res) => {
  const slug = req.params.slug

  const query = db.collection('heats')
    .where('athleteSlugs', 'array-contains', slug)
    .get()

  const athleteSchedule = (await query).docs.map(doc => doc.data())
  res.render('athletes-schdules', { athleteSchedule })
}
const athleteCreateByFrom = async (req, res) => {
  const { slug, name, images, gender } = req.body
  const data = { slug, name, images, gender }

  const query = db.collection('athletes')
    .doc(slug)
    .set(data)

  await query
  res.redirect(`/athletes/${slug}`)
}
module.exports = {
  athleteCreateForm, athleteList, athleteDetails, athleteSchedule, athleteCreateByFrom
}
