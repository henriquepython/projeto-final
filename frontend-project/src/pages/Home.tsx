import { Carrousel, CarrouselItem } from '../shared/components'



export const Home = () => {
    return (
       <>
            <Carrousel />
            <CarrouselItem category='Clothes'/>
            <CarrouselItem category='Eletronics'/>
            <CarrouselItem category='Sports'/>
        </>
    );
};