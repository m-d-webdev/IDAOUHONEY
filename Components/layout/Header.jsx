"use client";

import Link from 'next/link';
import CartButton from './a/CartButton';
import HeaderLinks from './a/HeaderLinks';
import Logo from './a/Logo';
import Profile from './a/Profile';
import SearchInput from './a/SearchIput';
import ChatBotButton from '../Chatbot/ChatBotButton';

const Header = () => {
    return (
        <div style={{ zIndex: "20" }} className="flex sticky  top-0  items-center justify-center w-full">

            <div className='max-w-[1400px] rounded-b-2xl  backdrop-blur-xs bg-background/60 flex justify-between items-center p-[10px] px-5  w-full'>
                <div className="flex gap-4 items-center">
                    <Logo />
                    <HeaderLinks />
                    <ChatBotButton />
                </div>
                <main className="flex  gap-5  items-center">
                    <SearchInput />
                    <Profile />
                </main>
            </div>


        </div>
    )
}

export default Header
