'use client'
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'




const products = [
    { name: 'おすすめ', description: '一押しのお店をピックアップ！まとめてご覧いただけます。', href: '/search/recommend', icon: ChartPieIcon },
    { name: 'ランキング', description: 'あなたのグループでのランキングをご覧いただけます。', href: '/search/ranking', icon: CursorArrowRaysIcon },
    { name: 'ジャンル', description: 'ジャンルごとのお店をご覧いただけます。', href: '/search/genre', icon: FingerPrintIcon },
    { name: '条件検索', description: '出前可能なのか？ランチ営業はしているのか？細かな条件検索が可能です。', href: '/search/conditinalsearch', icon: SquaresPlusIcon },
    { name: '近場で検索', description: 'パパッと近場ですましたい！そんな時に便利です。', href: '/search/nearbysearch', icon: ArrowPathIcon },
]
const callsToAction = [
{ name: 'サービスサイト', href: 'https://kokogohan-kohta9521s-projects.vercel.app/', icon: PlayCircleIcon },
{ name: 'お問い合わせ', href: 'https://kokogohan-kohta9521s-projects.vercel.app/contact', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                {/* logo area */}
                <div className="flex lg:flex-1">
                    <a href="/" className="flex lg:flex-1">
                        <img className="h-8 w-auto" src="/images/logo.png" alt="" />
                    </a>
                </div>
                {/* center menu area */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only text-black">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 transition duration-300 hover:text-[color:var(--main-red-color)]">
                            探す
                            <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                {products.map((item) => (
                                    <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[color:var(--main-red-color)]" aria-hidden="true" />
                                    </div>
                                    <div className="flex-auto">
                                        <a href={item.href} className="block font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                    </div>
                                ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    {item.name}
                                    </a>
                                ))}
                                </div>
                            </Popover.Panel>
                            </Transition>
                    </Popover>

                    <a href="/post" className="text-sm font-semibold leading-6 ttransition duration-300 hover:text-[color:var(--main-red-color)]">
                        投稿する
                    </a>
                    <a href="/timeline" className="text-sm font-semibold leading-6 transition duration-300 hover:text-[color:var(--main-red-color)]">
                        タイムライン
                    </a>
                    <a href="/ranking" className="text-sm font-semibold leading-6 transition duration-300 hover:text-[color:var(--main-red-color)]">
                        ランキング
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/login" className="text-sm font-semibold leading-6 text-[color:var(--main-red-color)] hover:text-[color:var(--hover-red-color)] hover:transition-all">
                        ログイン <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* hamburger */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        alt=""
                    />
                    </a>
                    <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                探す
                                <ChevronDownIcon
                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                                {[...products, ...callsToAction].map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </Disclosure.Button>
                                ))}
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        投稿する
                        </a>
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        タイムライン
                        </a>
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        ランキング
                        </a>
                    </div>
                    <div className="py-6">
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        ログイン
                        </a>
                    </div>
                    </div>
                </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header;