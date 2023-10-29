import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { resetPasswordVlidation } from '../helper/Validate'

const Reset = () => {

  const formik=useFormik({
    initialValues:{
      password:'admin@123',
      conform_pwd:'admin@123'
    },
    validate:resetPasswordVlidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values=>{
      console.log(values)
    }

  })
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
                font-bold'>Reset</h4>
                <span className='py-4 text-xl 
                w-2/3 text-center text-gray-500'>
                 Enter New Password
                </span>
                </div>

                <form  action="" onSubmit={formik.handleSubmit}
                 className='pt-20'>
                   
                    <div className={styles.textbox}>
                        <div className='pl-[100px] '>
                        <input {...formik.getFieldProps('password')} className='m-3' type="text" placeholder='Password' 
                          />
                           <input {...formik.getFieldProps('conform_pwd')} type="text" placeholder='Conform Password'
                          />
                          </div>
                          <div className='w-[400px] mt-4 ml-[60px]'>
                          <button className=' bg-indigo-500 
                          w-[250px] h-[50px] rounded-lg pl-1'
                           type='submit'>RESET</button>
                          </div>
                           
                    </div>
                   
                 </form>
            </div>
         </div> 
    </div>
  )
}

export default Reset
