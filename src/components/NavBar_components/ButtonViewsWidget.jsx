import { ButtonGroup, Spacer, Button, Menu, MenuButton, MenuList, useDisclosure, MenuItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { GetAllCategories } from "../../utils/GetCategoryInfo";

export default function ButtonViewsWidget() {
  const timerRef = useRef();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const goToHomePage = () => navigate('/');
  const goToAboutPage = () => navigate('/about');

  const fetchData = async () => {
    const executeFetch = await GetAllCategories();
    setCategories(executeFetch);
  };

  const btnMouseEnterEvent = () => {
    setIsOpenMenu(true);
  };

  const btnMouseLeaveEvent = () => {
    timerRef.current = window.setTimeout(() => {
      setIsOpenMenu(false);
    }, 150);
  };

  const menuListMouseEnterEvent = () => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsOpenMenu(true);
  };

  const menuListMouseLeaveEvent = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ButtonGroup w='100%' h='100%' flexGrow='6'>
      <Button variant='ghost' size='lg' _hover={{ bg: 'white' }} colorScheme='white' w='100%' h='70%' onClick={goToHomePage}>Home</Button>
      <Menu placement='bottom' isOpen={isOpenMenu}>
        <MenuButton
          as={Button}
          variant='ghost'
          size='lg'
          _hover={{ bg: 'white' }}
          colorScheme='white'
          w='100%'
          h='70%'
          top='0.1px'
          onMouseEnter={btnMouseEnterEvent}
          onMouseLeave={btnMouseLeaveEvent}
          onClick={(() => { navigate('/category'); onClose(); })}
        >
          Catalogue
        </MenuButton>
        <MenuList onMouseEnter={menuListMouseEnterEvent} onMouseLeave={menuListMouseLeaveEvent}>
          {
            categories.map((value,index) =>(
              <MenuItem key={value.ID} onClick={() => {navigate('/category/'+value.ID);onClose();}}>{(value.Name).charAt(0).toUpperCase()+(value.Name).slice(1)}</MenuItem>
            ))
          }
        </MenuList>
      </Menu>
      <Spacer />
      <Button variant='ghost' size='lg' _hover={{ bg: 'white' }} colorScheme='white' w='100%' h='70%' onClick={goToAboutPage}>About</Button>
    </ButtonGroup>
  )
}
