const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/Sad-Dog.jpg" alt="Sad Dog"/>
                <div>
                  Image by <a href='https://www.istockphoto.com/portfolio/Borodai?mediatype=photography'>Andrii Borodai</a> on <a href='https://www.istockphoto.com/photo/lovely-lablador-lying-on-the-bed-cute-kind-dog-resting-on-the-couch-gm1136014620-302416225?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsad-dog&utm_term=sad%20dog%3A%3A%3A'>Upsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
