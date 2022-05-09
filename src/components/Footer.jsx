function Footer() {
    return ( <footer className="page-footer purple darken-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/johnnychikabila/ecomerce-project" target= '_blank'>Git</a>
      </div>
    </div>
  </footer>

    )
}

export {Footer}