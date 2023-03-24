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
      pic: '/images/H-Thai.jpg'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/Cat-Cafe.jpg'
    }]
res.render('places/index', {
      places: places,
    })
})

module.exports = router
