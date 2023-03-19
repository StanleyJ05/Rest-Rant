const router = require('express').Router()


// More code here in a moment
router.get('/',(req, res)=>{
    res.render('places/index')
// GET /places
    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: 'http://placekitten.com/250/250'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: 'http://placekitten.com/250/250'
    }]
res.render('places/index', {
      places: places,
    })
})

module.exports = router
