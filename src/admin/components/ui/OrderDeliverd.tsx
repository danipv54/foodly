
export const OrderDeliverd = ({ order, setFoodId, openModal }: any) => {

    const { user, name, notes } = order
    return (

        <div
            className='bg-white w-full py-4 px-12 rounded-lg shadow-lg my-2 animate__animated animate__fadeIn'>
            <h1><span className='font-semibold'>To</span>: {user ? user : 'fulano'} </h1>
            <h1><span className='font-semibold'>Order</span>: {name}</h1>
            {notes && (<p>   <span className='font-semibold'>Note</span>: {notes}</p>)}
        </div>
    )
}