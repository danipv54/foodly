
import { useAppDispatch } from '../../store';
import { onModal } from '../../store/auth';

interface Props {
    msg: string,
    desc:string
}

export const AuthInfo = ( {msg, desc}:Props ) => {
    const dispatch = useAppDispatch();


    return (
        <div className='bg-black/70 w-full h-full z-10 absolute'>
            <div className='bg-white  md:w-1/2 lg:w-1/3 xl:w-1/4 h-96 mx-auto rounded-lg shadow-md flex flex-col mt-32'>
                <h1 className=' text-center text-4xl mt-16 py-8 animate-pulse'>{msg}...</h1>

                <p className='text-center'>{desc}</p>

                <button onClick={() => dispatch(onModal(false))} className='bg-green-300 
              hover:bg-green-500 px-4 py-2 rounded-md shadow-md w-fit self-center mt-4'>
                    Got it!
                </button>
            </div>
        </div>
    )
}

