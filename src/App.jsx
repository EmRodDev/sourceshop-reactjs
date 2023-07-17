import { useDisclosure } from '@chakra-ui/react';
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import FooterPage from './components/FooterPage.jsx';
import PageBody from './components/PageBody.jsx';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
    <SideBar isOpen={isOpen} onClose={onClose} />
    <NavBar onClick={onOpen}/>
    <PageBody/>
    <FooterPage/>
    </>
  )
}

export default App
