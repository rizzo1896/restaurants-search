import React, { useState } from 'react';
import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components/index';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }
  return (
    <>
      <Wrapper>
        <Container>
          <Search>
            <Logo src={logo} alt="Logo da empresa" />
            <TextField
              outlined
              label="Pesquisar Restaurantes"
              trailingIcon={<MaterialIcon role="button" icon="search" />}>
              <Input
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </TextField>
            <CarouselTitle>Na sua Área</CarouselTitle>
            <Carousel {...settings}>
              <Card photo={restaurante} title="Texto aqui" />
              <Card photo={restaurante} title="Texto aqui" />
              <Card photo={restaurante} title="Texto aqui" />
              <Card photo={restaurante} title="Texto aqui" />
              <Card photo={restaurante} title="Texto aqui" />
              <Card photo={restaurante} title="Texto aqui" />
              <Card photo={restaurante} title="Texto aqui" />
            </Carousel>
          </Search>
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))}
        </Container>
        <Map query={query} />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
      </Wrapper>
    </>
  );
};

export default Home;
