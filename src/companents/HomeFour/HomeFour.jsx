// eslint-disable-next-line no-unused-vars
import React from 'react'
import AppStore from '../../assets/images/sectionfour/AppStore.svg'
import AppButton from '../../assets/images/sectionfour/AppButton.svg'
import QRCode from '../../assets/images/sectionfour/QRCode.svg'
import Phone from '../../assets/images/sectionfour/phone.svg'

export default function HomeFour(){
    return(
        <div className='container mx-auto mt-[72px]'>
            <div className='bg-[#EEEEEE] rounded-[32px] md:flex items-center justify-center xl:gap-[148px] px-2'>
                <div className='grid gap-[32px] pt-[63px] md:mt-[63px]'>
                    <h1 className='font-custom md:w-[476px] text-[28px] font-[700] line-[33.6px]'>Mobil ilovamizni yuklab oling va mahsulotlaringizni reklama qiling</h1>
                    <div className='flex gap-6'>
                        <img src={AppStore} alt="" className='w-[135px] h-[40px]'/>
                        <img src={AppButton} alt="" className='w-[120px] h-[40px]'/>
                    </div>
                    <p className='font-custom w-[200px]'>Yuklab olish uchun QR kodni skanerlang qarating</p>
                    <img src={QRCode} alt="" />
                </div>
                <div className='mt-[57px] md:mt-[150px]'>
                    <img src={Phone} alt="" className=' mx-auto'/>
                </div>

            </div>
        </div>
    )
}
