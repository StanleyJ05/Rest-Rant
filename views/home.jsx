const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/eggs image.jpg" alt="Eggs Picture" />
                <div>
                  Photo by <a href='https://www.istockphoto.com/portfolio/krblokhin?mediatype=photography'>krblokhin</a> on <a href='https://www.istockphoto.com/photo/closeup-macro-of-pasture-raised-farm-fresh-dozen-brown-eggs-store-bought-from-farmer-gm1356240873-430466347?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree&utm_term=free%3A%3A%3A'>Unsplash</a>
                </div>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

  

module.exports = home
