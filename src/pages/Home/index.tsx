import Banner from '@/components/Banner/index.tsx';
import Slider from './components/Slider/index.tsx';
import './Home.ts'
import Header from '@/components/Header';
const Home = () => {
    return (
        <>
            <Header />
            <Slider/>
            <Banner/>
        </>
    )
}

export default Home;