// import React from "react";
import './Header.css'
import Logo from '../assets/images/Logo.svg';

function Header(){
    return(
        <div className="container mx-auto lg:sticky top-0 z-50 bg-[#F7F7F7] py-[24px]">
           <div className='flex items-center justify-between px-2 lg:px-0 xl:px-2 2xl:px-0'>
            <img src={Logo} alt="Logo" className='' />
                <div className="flex items-center justify-center gap-[16px] xl:gap-[32px]">
                    <div className="dropdown hidden lg:block">
                        <button className="dropbtn"><i className='bx bx-menu text-[14px] xl:text-[20px] rounded-[8px] text-[#25B679] bg-[#E2F0EA] px-[10px] py-[8px] xl:px-[14px] xl:py-[12px] font-custom'> Kategoriya</i></button>
                        <div className="dropdown-content">
                            <a href="#">salomlar</a>
                            <a href="#">salomlar</a>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <i className='bx bx-search absolute text-[20px] ml-[175px] xl:ml-[290px] 2xl:ml-[470px]'></i>
                        <input type="text" placeholder="Mahsulotlarni izlash" className="outline-none border-none rounded-[8px] bg-[#EEEEEE] px-[10px] py-[4px] xl:px-[20px] xl:py-[12px] w-[200px] xl:w-[320px] 2xl:w-[500px]"/>
                    </div>
                    <div className='hidden lg:flex items-center justify-center gap-[16px] xl:gap-[32px] text-[16px] font-custom'>
                        <a href="#" className='flex items-center'><i className='bx bx-user font-custom text-[20px] px-[12px]'></i>Kirish</a>
                        <a href="#" className='flex items-center'><i className='bx bx-plus-circle text-[20px] px-[12px]'></i>Qo`shish</a>
                        <a href="#" className='flex items-center'><i className='bx bx-heart text-[20px] px-[12px]'></i> Sevimlilar</a>
                    </div>
                    <div>
                    <i className='bx bx-globe' ></i>
                    <select className='bg-[#F7F7F7] outline-none border-none'>
                        <option value="uz">O`zbekcha</option>
                        <option value="ru">Russkiy</option>
                        <option value="en">English</option>
                    </select>
                    </div>
                </div>
           </div>
           <div className="flex items-center lg:hidden p-2 mt-[15px]">
                <input type="text" placeholder="Mahsulotlarni izlash" className="outline-none border-none rounded-l-[8px] bg-[#EEEEEE] px-[10px] py-[4px] xl:px-[20px] xl:py-[12px] w-full xl:w-[320px] 2xl:w-[500px]"/>
                <i className='bx bx-search text-[20px] bg-[#EEEEEE] py-[6px] rounded-r-[8px] px-1'></i>
            </div>
        </div>
    )
}

export default Header;