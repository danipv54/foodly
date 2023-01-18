
export const OrderLayout = ({ children }: JSX.Element | any) => {
    return (
        <>
            <div className=' flex flex-col justify-items-center bg-slate-50 shadow-lg p-2 pb-8 h-full 
            w-30 md:w-1/2 lg:w-1/3 xl:w-1/4 overflow-hidden  animate__animated animate__fadeIn' >

                <h1 className=' text-green-600 text-lg md:text-xl lg:text-2xl font-bold text-center my-8'>
                    Orders Delivered</h1>
                {children}

            </div>
        </>
    )
}
