import React from 'react'
import { Link } from 'react-router-dom'
import avatar from './../assets/profile.png'
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../helper/Validate'

const Recovery = () => {

  
  return (
    <div className='container mx-auto pt-9 '>

      <Toaster position='top-center' reverseOrder={false}></Toaster>
         <div className='flex
          h-screen pl-[510px] border  
         '>
<div className={styles.glass}>
            <div className='title
            flex flex-col items-center'>
                <h4 className='text-5xl 
                font-bold'>Recovery</h4>
                <span className='py-4 text-xl 
                w-2/3 text-center text-gray-500'>
                Enter OTP to recover password
                </span>
                </div>

                <form   className='py-1' action="" 
               >
                   
                    <div className={styles.textbox}>
                        <div className='pl-[100px]  flex flex-col items-center
                    gap-6'>
                      
                          <span className='py-4 text-sm text-left
                         text-gray-500 '>Enter 6 digit OTP sent to your 
                         email address</span>
                        <input type="text" placeholder='OTP'
                          />
                          </div>
                          <div className='w-[400px] mt-4'>
                          <button className={styles.btn} 
                           type='submit'>Let's Go</button>
                          </div>
                          <div className='text-center pt-1 py-3 pl-[50px]
                    '>
                        <span className='text-gray-500'>Can't get OTP<button className='
                        text-red-500 ' >Resend</button></span>
                    </div>   
                    </div>
                   
                 </form>
            </div>
         </div> 
    </div>
  )
}

export default Recovery
