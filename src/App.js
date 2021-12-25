import './AppStyle.scss'

import Logo from './img/logo.png'

function App() {
  return (
    //Start site
    <div className="App">
      <header className="top-bar">
        <div className="logo">
          <img className="logo-devmedia" src={Logo} alt="logo dev midea" />
        </div>

        <div className="menus">
          <h3>
            <a href="#">CADASTRAR NOTICIAS</a>
          </h3>
          <h3>
            <a href="#">EXIBIR NOTICIAS</a>
          </h3>
          <input className="search" />

          <div className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      <div className="body">
        <div className="content">
          <div className="news">
            <h3>This's the first news</h3>
            <p>
              We are looking for programmer Front-end, this one will works in
              sites of clientes, updating the pages and trying makes it better.
            </p>
            <button>Acessar</button>
          </div>

          <div className="news">
            <h3>This's the first news</h3>
            <p>
              We are looking for programmer Front-end, this one will works in
              sites of clientes, updating the pages and trying makes it better.
            </p>
            <button>Acessar</button>
          </div>

          <div className="news">
            <h3>This's the first news</h3>
            <p>
              We are looking for programmer Front-end, this one will works in
              sites of clientes, updating the pages and trying makes it better.
            </p>
            <button>Acessar</button>
          </div>
        </div>
      </div>

      <footer>Dessenvolved by Rafael Nascimento</footer>
    </div> //End site
  )
}

export default App
