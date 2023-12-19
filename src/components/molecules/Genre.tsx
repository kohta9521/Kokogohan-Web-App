import React from 'react'

// next import
import Image from 'next/image'
import Link from 'next/link'


// components import


const Genre = () => {
    return (
        <Link className="items-center" href={"search/genre/fastfood"}>
            <Image width={50} height={50} src={"/icons/genre/FastFood.png"} alt='genreIconImage' />
            <p className="text-xs">ファストフード</p>
        </Link>
    )
}

export default Genre