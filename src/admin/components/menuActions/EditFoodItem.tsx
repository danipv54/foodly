import { useForm } from '../../../auth/hooks/useForm';
import { useAppDispatch } from '../../../store';
import { startUpdatingMenuItem } from '../../../store/shared';
import { IFOOD } from '../../../user/interface/IFood';

interface Props {
  food: IFOOD,
  setOnEditMenu: any
}

export const EditFoodItem = ({ food, setOnEditMenu }: Props) => {
  const dispatch = useAppDispatch();
  const { imgFood, name, price } = food;

  const { title, itemPrice, itemImg, onInputChange, } = useForm({
    title: name,
    itemPrice: price,
    itemImg: imgFood
  })

  const onHandleForm = (e: any) => {
    e.preventDefault();

    if (title == name && price == itemPrice && imgFood == itemImg) {
      return;
    }

    let menuItem = {
      ...food,
      name: title,
      price: itemPrice,
      imgFood: itemImg
    }
    dispatch(startUpdatingMenuItem(menuItem));
    setOnEditMenu(false);
   
  }

  const onCloseForm = (e: any) => {
    e.preventDefault()
    setOnEditMenu(false)
  }


  return (
    <div className='bg-slate-800/50  left-0 w-full h-full bg-gray-900 fixed z-10 bg-opacity-80 top-0 
     sticky-0 animate__animated animate__animated animate__fadeIn '>


      <div className='bg-white  md:w-1/2 lg:w-1/3 xl:w-1/2 h-fit mx-auto  md:mt-5 lg:mt-32 grid 
           rounded-lg shadow-lg p-8'
      >

        <form onSubmit={onHandleForm} className=' grid grid-cols-1 xl:grid-cols-2'>
          <img className='xl:w-[90%] rounded-md object-contain my-8' src={`${itemImg}`} alt={name} />
          <div className='w-[100%]'>

            <div className='grid gap-4'>
              <div className='grid '>
                <label htmlFor="">Item name:</label>
                <input name='title' className=' shadow-md bg-slate-100 p-2' value={title}
                  onChange={onInputChange}>
                </input>
              </div>

              <div className='grid'>
                <label htmlFor="">Item price:</label>
                <input type='number' name='itemPrice' className=' shadow-md bg-slate-100 p-2'
                  value={itemPrice} onChange={onInputChange}>
                </input>
              </div>

              <div className='grid'>
                <label htmlFor="">Item Img:</label>
                <input type="url" name='itemImg' className=' shadow-md bg-slate-100 p-2' value={itemImg}
                  onChange={onInputChange}>
                </input>
              </div>
            </div>

            <div className='flex space-x-8 mt-16 '>
              <button className='bg-red-500 py-2  px-6 rounded-lg shadow-lg w-full' onClick={onCloseForm}>
                Close </button>

              <button type='submit'  className='bg-green-500 py-2 px-4 rounded-lg shadow-lg w-full' >
                Save</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
