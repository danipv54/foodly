import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import { onModal, startingLoginUser } from '../../store/auth'
import { AuthInfo } from '../components'
import { useForm } from '../hooks/useForm'

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { open,authMessage,authDesc } = useAppSelector(state => state.auth);
  const [InvalidInput, setInvalidInput] = useState(false)
  const { onInputChange, password, email, formState, regex } = useForm({
    email: '',
    password: ''
  })

  const onNavigate = (e:any) => {
    e.preventDefault();
    navigate('/auth/register')
  }

  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    if (regex.test(email)) {
      dispatch(onModal(false))
      dispatch(startingLoginUser(formState)!);

      setInvalidInput(false);
      return;
    }
    setInvalidInput(true)
  }


  return (
    <>
      {open &&
        <AuthInfo msg={authMessage}  desc={authDesc}   />
      }

      <h1 className='text-4xl font-bold text-center mt-8'>Foodly</h1>

      <div className='bg-white  mx-auto mt-16 p-8 rounded-lg  md:w-1/2 lg:w-1/3 xl:w-1/4'>
        <h2 className='text-center mb-4 text-lg font-semibold'>Login</h2>

        <form onSubmit={onHandleSubmit} className='flex flex-col justify-center'>
          <label htmlFor="email" className='block text-sm'>Email: </label>

          <input
            name='email'
            className=' bg-white/70 px-4 py-2 rounded-md shadow-md'
            type="email"
            autoComplete='true'
            placeholder='your@example.com'
            value={email}
            onChange={onInputChange}
          />

          {InvalidInput && <span className='text-xs text-red-500 mt-1 text-right'>Invalid email </span>}

          <label htmlFor="password" className='block text-sm mt-4'>Password: </label>

          <input
            name='password'
            type="password"
            autoComplete='true'
            current-password='true'
            placeholder='your Password*****'
            value={password}
            onChange={onInputChange}
            className=' bg-white/70 px-4 py-2 rounded-md shadow-md'
          />

          <div className=' flex flex-col justify-center space-y-4 mt-8 '>
            <button className='bg-green-300 py-2 px-8 hover:bg-green-600 rounded-lg shadow-lg'
              type='submit' >Login in your account</button>
            <button onClick={onNavigate} className='bg-red-500  py-2 px-8 hover:bg-red-800 rounded-lg 
                shadow-lg' >
              Register your account
            </button>
          </div>
        </form>

       
      </div>

      <div className='grid ml-8 mt-8'>
     <p> Admin: okymcgaofuwybfyrua@tmmcv.com</p>
     <p> User: len98524@xcoxc.com</p>
       <p> psw:123456</p>
      </div>


    </>
  )
}

export default Login