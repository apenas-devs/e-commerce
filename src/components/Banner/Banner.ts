import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';


export const BannerContainer = styled.div`
`

export const SwiperContainer = styled(Swiper)`
  --swiper-pagination-color: #272727;
  --swiper-pagination-bullet-inactive-color: #C4C4C4;
  --swiper-pagination-bullet-width: 16px;
  --swiper-pagination-bullet-height: 4px;
  --swiper-pagination-bullet-border-radius: 3px;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
`

export const Slide = styled(SwiperSlide)`
  position: relative;
`

export const SlideImg = styled.img`

`

export const DescriptionContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const BannerDescription = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #FFFFFF;
  font-family: "Roboto", serif;
  font-weight: 600;
`

export const BannerButton = styled.button`
  color: #FFFFFF;
  font-size: 18px;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  padding: 0.5rem 2rem;
`