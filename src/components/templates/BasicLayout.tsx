import React from 'react'
import Header from '../organisms/Header'

// components import


// type
export type Props = {
    children: React.ReactNode
}

const BasicLayout = ({
    children
}: Props) => {
    return (
        <div className="w-full">
            <Header />
            {children}
        </div>
    )
}

export default BasicLayout