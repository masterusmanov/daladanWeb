import AppStore from '../../assets/images/sectionfour/AppStore.svg'
import AppButton from '../../assets/images/sectionfour/AppButton.svg'


export default function Footer(){
    return(
        <div className="container mx-auto mt-[90px]">
            <div className='flex justify-between md:justify-center font-custom gap-[32px] md:gap-[174px] xl:gap-[200px] px-2 py-[32px]'>
                <div className='grid'>
                    <h2 className='font-[600] text-[16px] xl:text-[19px]'>Foydalanuvchilarga</h2>
                    <a href="#" className='text-[14px] mt-[24px] xl:text-[16px]'>Biz bilan bog’lanish</a>
                    <a href="#" className='text-[14px] mt-[10px] xl:text-[16px]'>Savol-javob</a>
                    <a href="#" className='text-[14px] mt-[10px] xl:text-[16px]'>Maxfiylik kelishuvi</a>
                    <a href="#" className='text-[14px] mt-[10px] xl:text-[16px]'>Foydalanuvchi kelishuvi</a>
                </div>
                <div className='lg:flex gap-[100px] xl:gap-[200px]'>
                    <div>
                        <h2 className='font-[600] text-[16px] xl:text-[19px]'>Ilovani yuklab olish</h2>
                        <div className='flex items-center gap-6 mt-[24px]'>
                            <img src={AppStore} alt="" className='w-[90px] md:w-[120px]'/>
                            <img src={AppButton} alt="" className='w-[80px] md:w-[120px]'/>
                        </div>
                    </div>
                    <div className='mt-[44px] lg:mt-0'>
                        <h2 className='font-[600] text-[16px] xl:text-[19px]'>Ilovani yuklab olish</h2>
                        <div className='flex items-center gap-[20px] mt-[24px]'>
                            <a href="#"><i className='bx bxl-instagram p-1 md:p-3 bg-gradient-to-br from-yellow-300 via-pink-600 to-orange-500 text-white text-[20px] md:text-[32px] rounded-full'></i></a>
                            <a href="#"><i className='bx bxl-telegram p-1 md:p-3 bg-[#34AADF] text-white text-[20px] md:text-[32px] rounded-full' ></i></a>
                            <a href="#"><i className='bx bxl-youtube p-1 md:p-3 bg-[#FF0000] text-white text-[20px] md:text-[32px] rounded-full' ></i></a>
                            <a href="#"><i className='bx bxl-facebook p-1 md:p-3 bg-[#337FFF] text-white text-[20px] md:text-[32px] rounded-full' ></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}