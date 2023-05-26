import { Home } from './assets/Page/Home'
import {Store }from './assets/Page/Store'
import {About }from './assets/Page/About'
import {Container}from 'react-bootstrap'
import {Routes,Route} from 'react-router-dom'
import { Navbar } from './assets/Navbar'
import {Header}  from './assets/Page/Header'
import { ShoppingCartProvider } from './assets/Context/ShoppingCartContext'
import { Footer } from './assets/Page/Footer'
import { Contact } from './assets/Page/Contact'
function App() {
  return (
    <ShoppingCartProvider>
    <Navbar/>
    <Container>
      <Header/>
      <Routes>
<Route path="/"element={<Home/>}/>
<Route path="/store" element={<Store/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>


    </Routes>

    </Container>
    <Footer/>

</ShoppingCartProvider>

  );
}

export default App;
