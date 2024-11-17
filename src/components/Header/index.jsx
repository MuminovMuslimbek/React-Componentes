import './index.css'

const index = () => {
  return (
    <div>
      <header className='header'>
        <div className="header__container container">
          <a  className='element' href="../index.html"><h1>LOGO</h1></a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <button>sing up</button>
        </div>
      </header>
    </div>
  )
}

export default index
