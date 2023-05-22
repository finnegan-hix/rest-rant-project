const router = require('express').Router()
const app = express()
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'C:\Users\Finny\class\rest-rant\public\images\FREE-RESTURANT.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'C:\Users\Finny\class\rest-rant\public\images\free-cafe.jpg'
      }]
      
      res.render('places/index', { places })

})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/places/:id', (req, res) => {
  res.render('places')
})




module.exports = router