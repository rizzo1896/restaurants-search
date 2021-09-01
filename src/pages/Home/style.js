import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: black;
  width: 500px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;
