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
const athleteCreateByFrom = (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const gender = req.body.gender

  res.send(`<p1>${name}<p1><br>
  Age:${age}
  <img src="/images/athletes/{{ panipak-wongpattanakit.jpg }}.jpg" />
  Gender: ${gender}`)
}
module.exports = {
  athleteCreateForm, athleteList, athleteDetails, athleteSchedule, athleteCreateByFrom
}
