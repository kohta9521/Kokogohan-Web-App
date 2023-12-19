import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// components import


const Login = () => {
    return (
        <div className="w-full flex">
            {/* ロゴを追加 */}
            <div className='flex items-center justify-center w-6/12 h-screen bg-red-600'>
                <Image className="" width={300} height={70} src="/images/logo.png" alt="logoimg" />
            </div>
            <div className='w-6/12'>
                <h1>ログイン画面</h1>
                <Link href={"/"}>ホームに戻る</Link>
            </div>
        </div>

    )
}

export default Login