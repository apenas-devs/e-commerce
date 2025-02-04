import { BannerButton, BannerContainer, BannerDescription, DescriptionContainer, Slide, SlideImg, SwiperContainer, } from './Banner.ts'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imgtest from '@/assets/Banner/Banner_Imagem.png'


const Banner = () => {

    const ImgMock = [ imgtest, imgtest, imgtest, imgtest, imgtest];
    const altImg = "img teste";

    return (
        <BannerContainer>
            <SwiperContainer
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {ImgMock.map((img, index) => (
                    <Slide key={index}>
                        <DescriptionContainer>
                            <BannerDescription>
                                {/* rever solução para esse nbsp, talvez o elemento html que estrutura o texto */}
                                F O R E V E R &nbsp; 21 
                            </BannerDescription>
                            <BannerDescription>
                                Big Fashion Festival
                            </BannerDescription>
                            <BannerDescription>
                                70% - 80% Off
                            </BannerDescription>
                            <BannerButton>
                                Explore
                            </BannerButton>
                        </DescriptionContainer>
                        <SlideImg src={img} alt={altImg}/>
                    </Slide>
                ))}
            </SwiperContainer>
        </BannerContainer>
    )
}

export default Banner;