import { useState } from 'react';
import Wrapper from './components/Wrapper/Wrapper.jsx'
import Header from './components/Header/Header.jsx'
import Container from './components/Container/Container.jsx'
import Banner from './components/Banner/Banner.jsx'
import Contents from './components/Contents/Contents.jsx'
import './global.css';

function HomePage() {
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  }

  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <Banner
            open={open}
            clickedToggle={clickedToggle}
            toggle={toggle}
          />
          <Contents />
        </Container>
      </Wrapper>
    </>
  )
}

export default HomePage
