import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const ContainerSlider = styled.div`
    
`

export const SwiperContainer = styled(Swiper)`

`

export const Slide = styled(SwiperSlide)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
export const CategorieTitle = styled.h3`
    width: 100%;
    text-align: center;
    white-space: nowrap;
    font-family: "Roboto", serif;
    font-size: 14px;
    font-weight: 100%;
    padding: 0.5rem 0;
`

export const CategorieImg = styled.img`
    border-radius: 100%;
    width: 62px;
    height: 62px;
`
