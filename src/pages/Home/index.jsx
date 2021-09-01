import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  Search,
  Logo,
  Carousel,
  CarouselTitle,
  ModalTitle,
  ModalContent,
} from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components/index';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
            {restaurants.length > 0 ? (
              <>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                  {restaurants.map((restaurant) => (
                    <Card
                      key={restaurant.place_id}
                      photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                      title={restaurant.name}
                    />
                  ))}
                </Carousel>
              </>
            ) : (
              <Loader />
            )}
          </Search>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              onClick={() => handleOpenModal(restaurant.place_id)}
              restaurant={restaurant}
            />
          ))}
        </Container>
        <Map query={query} placeId={placeId} />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
          {restaurantSelected ? (
            <>
              <ModalTitle>{restaurantSelected?.name}</ModalTitle>
              <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
              <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
              <ModalContent>
                {restaurantSelected?.opening_hours?.open_now
                  ? 'Aberto agora :D'
                  : 'Fechado neste momendo :c'}
              </ModalContent>
            </>
          ) : (
            <>
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
            </>
          )}
        </Modal>
      </Wrapper>
    </>
  );
};

export default Home;
