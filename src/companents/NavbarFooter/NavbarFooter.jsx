function NavbarFooter(){
    return(
        <div className="container mx-auto lg:hidden">
            <div className="flex items-center p-4 justify-between text-gray-500 font-[600]">
                <div className="text-center cursor-pointer md:text-[24px]">
                    <i className='bx bx-home-smile'></i>
                    <h2 className="text-[12px]">Bosh sahifa</h2>
                </div>
                <div className="text-center cursor-pointer md:text-[24px]">
                    <i className='bx bx-category'></i>
                    <h2 className="text-[12px]">Kategoriya</h2>
                </div>
                <div className="text-center cursor-pointer md:text-[24px]">
                    <i className='bx bx-plus-circle'></i>
                    <h2 className="text-[12px]">Qo`shish</h2>
                </div>
                <div className="text-center cursor-pointer md:text-[24px]">
                    <i className='bx bx-heart'></i>
                    <h2 className="text-[12px]">Sevimlilar</h2>
                </div>
                <div className="text-center cursor-pointer md:text-[24px]">
                    <i className='bx bx-user' ></i>
                    <h2 className="text-[12px]">Bosh sahifa</h2>
                </div>
            </div>
        </div>
    )
}

export default NavbarFooter;