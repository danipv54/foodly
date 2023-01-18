import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { startingLoginOut } from '../store/auth';

export const SideMenu = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('/auth/login', { replace: true });
        dispatch(startingLoginOut());
    }

    return (
        <>
          <nav className='bg-gray-800 w-28 p-8 shadow-lg h-screen flex flex-col justify-between items-center fixed top-0 z-10 mr-64' >
                <ul className='text-white space-y-8 mb-8' >
                    <li>
                        <NavLink to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 text-blue-200 hover:scale-125 hover:text-blue-300 ">

                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                />
                            </svg>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/user'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor"
                                className="w-8 h-8 text-blue-200 hover:scale-125 hover:text-blue-300">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                     d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982
                                     2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966
                                     8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/support'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor"
                                className="w-8 h-8 text-blue-200 hover:scale-125 hover:text-blue-300">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 
                                    2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 
                                    21l2.755-4.133a1.14  1.14
                                    0 01.865-.501 48.17248.172 0 003.423-.379c1.584-.233 2.707-1.626 
                                    2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0
                                    0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 
                                    6.741v6.018z"
                                />
                            </svg>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor"
                                className="w-8 h-8 text-blue-200 hover:scale-125 hover:text-blue-300">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                 d="M2.25 3h1.386c.51 0 
                                 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0
                                 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                                 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6
                                 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 
                                 011.5 0z"
                                />
                            </svg>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/fq'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor"
                                className="w-8 h-8 text-blue-200 hover:scale-125 hover:text-blue-300">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                   d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003
                                   0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 
                                   1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 
                                   0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 
                                   0-.676-.186-.959-.401a1.647 1.647  0 00-1.003-.349c-1.036 0-1.875
                                   1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 
                                   1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 
                                   0 01-.642 5.056c1.518.19 
                                   3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647
                                   1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84
                                   2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 
                                   .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 
                                   00.582-4.717.532.532 0 00-.533-.57v0c-.355
                                   0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 
                                   0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 
                                   .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663
                                   48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 
                                   01-.61-.58v0z"
                                />
                            </svg>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/setting'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor"
                                className="w-8 h-8 text-blue-200 hover:scale-125 hover:text-blue-300">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                  d="M10.5 6h9.75M10.5 6a1.5
                                  1.5 0 11-3 0m3 0a1.5 1.5  0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 
                                  1.5 0 01-3 0m3 0a1.5 1.5
                                  0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5
                                  1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                />
                            </svg>
                        </NavLink>
                    </li>
                </ul>

                <button onClick={onLogOut}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 
                        21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                </svg>
                </button>
            </nav>


        </>
    )
}


