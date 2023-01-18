import { useNavigate } from 'react-router-dom';

export const EmptyCartPage = () => {
    let navigate = useNavigate();
    
    setTimeout(() => {
        navigate('/', { replace: true })

    }, 3000);

    return (
        <div className='mx-auto w-full mt-32 animate__animated animate__fadeIn'>
            <h1 className='font-black text-6xl text-center' >Aren't you hungry? </h1>
            <h1 className=' mt-4 text-2xl text-center' >it's not a bad idea to order something you like </h1>
            <h3 className='text-center'>What are you waiting for?
                <span className='animate-pulse animate-ping duration-1000'>....</span>
            </h3>
            <img className='mx-auto mt-16' src="https://cdn-icons-png.flaticon.com/512/742/742880.png" alt="" />
        </div>
    )
}
