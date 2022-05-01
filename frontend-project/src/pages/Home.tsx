import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components'



export const Home = () => {
    return (
       <>
            <Carrousel />
            <BannerCategory />
            <CarrouselItem category='Clothes'/>
            <CarrouselItem category='Eletronics'/>
            <CarrouselItem category='Sports'/>
        </>
    );
};