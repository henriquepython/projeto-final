import { ResponsiveAppBar } from "../shared/components/ResponsiveAppBar";

const section = [ 
    {title: 'Clothes', url:'/storeclothes'},
    {title: 'Sports', url:'/storesports'},
    {title: 'Eletronics', url:'/storeeletronics'}
]

export const Home = () => {
    return (
        <>
            <ResponsiveAppBar title='My Store' sections={section} />
        </>
    );
};