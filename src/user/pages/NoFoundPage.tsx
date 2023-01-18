import { useNavigate } from 'react-router-dom';

const NoFoundPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/', { replace: true });
  }, 5000);

  return (
    <div className=''>
      <h1 className='text-center text-4xl font-black'>No Page Found</h1>
      <img className='mx-auto' src="/nofound.gif" typeof='gif' alt="NoFoundPage" />
    </div>
  )
}

export default NoFoundPage