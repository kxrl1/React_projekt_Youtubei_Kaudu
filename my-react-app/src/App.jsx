import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Header/>
      <Button/>
      <Food/>
      <Footer/>
      <Student name="Roadhog" age={22} isStudent={false}/>
    </>
  )
}

export default App
