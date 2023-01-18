
export const NavMenu = () => {
  const { user_metadata } = JSON.parse(localStorage.getItem('user')!);
  let name = user_metadata.name;

  return (
    <div className=' mx-36  h-20 w-full '>
      <div className="">
        <h1 className='text-gray-800 font-bold  text-4xl mt-4 pb-0 mb-0'>Welcome {name}</h1>
        <h1 className='text-gray-800   text-lg mt-1'>¿Qué vamos a comer hoy?</h1>
      </div>
    </div>
  )
}
