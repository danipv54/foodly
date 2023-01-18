import { FC } from 'react'
import { SideMenu } from './SideMenu'
import { ToastOrder } from './ToastOrder'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const MainLayout: FC<Props> = ({ children }) => {

    return (
        <div className='overflow-hidden '>
            <SideMenu></SideMenu>
            {children}

        </div>
    )
}

export default MainLayout