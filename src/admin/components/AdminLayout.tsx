import React, { FC } from 'react'
import { NavMenu } from './NavMenu'

interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AdminLayout: FC<Props> = ({ children }) => {
    return (
        <div className='space-y-8'>

            <NavMenu></NavMenu>
            <div className='ml-4'>
                {children}
            </div>
        </div>
    )
}
