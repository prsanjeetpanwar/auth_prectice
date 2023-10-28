import React from 'react'
import { Link } from 'react-router-dom'
import avatar from './../assets/profile.png'
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../helper/Validate'

const Password = () => {

  const formik=useFormik({
    initialValues:{
      password:''
    },
    validate:passwordValidate,
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
                font-bold'>Hello Again!</h4>
                <span className='py-4 text-xl 
                w-2/3 text-center text-gray-500'>
                  Explore More by  <br />connecting with us
                </span>
                </div>

                <form action="" onSubmit={formik.handleSubmit}
                 className='py-1'>
                    <div className='profile
                    flex justify-center py-4'>
                        <img src={avatar} alt="avatar"  className={styles.profile_img}/>
                    </div>
                    <div className={styles.textbox}>
                        <div className='pl-[100px]'>
                        <input {...formik.getFieldProps('password')} type="text" placeholder='Password'
                          />
                          </div>
                          <div className='w-[400px] mt-4'>
                          <button className={styles.btn} 
                           type='submit'>Let's Go</button>
                          </div>
                          <div className='text-center pt-1 py-3 pl-[50px]
                    '>
                        <span className='text-gray-500'>Forgot Password <Link to="/recovery" className='
                        text-red-500 ' >Recover</Link></span>
                    </div>   
                    </div>
                   
                 </form>
            </div>
         </div> 
    </div>
  )
}

export default Password
