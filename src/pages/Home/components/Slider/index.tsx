import 'swiper/css';

import {
    CategorieImg,
    CategorieTitle,
    ContainerSlider,
    Slide,
    SwiperContainer
} from './Slider.ts';

import CategoriesIcon from '@/assets/Slider/categories.svg'
import KidsIcon from '@/assets/Slider/kids.jpg'
import MenIcon from '@/assets/Slider/men.jpg'
import WomenIcon from '@/assets/Slider/women.jpg'
import WesternWearIcon from '@/assets/Slider/western-wear.jpg'


const Slider = () => {

    const slides = [ 
        {img: CategoriesIcon, title: "Categories"},
        {img: MenIcon, title: "Men"},
        {img: WomenIcon, title: "Women"},
        {img: KidsIcon, title: "Kids"},
        {img: WesternWearIcon, title: "Western Wear"}
    ]

    return (
        <ContainerSlider>
            <SwiperContainer
            spaceBetween={5}
            slidesPerView={4.7}
            >
                {slides.map((slide, index) => (
                    <Slide key={index}>
                        <CategorieImg src={slide.img} alt={slide.title}/>
                        <CategorieTitle>{slide.title}</CategorieTitle>
                    </Slide>
                ))}
            </SwiperContainer>
        </ContainerSlider>
    )
}

export default Slider;