import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './form.module.css'
import uploadIcon from '../../assets/images/upload.png'

const ContactForm = ({targetSectionRef}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Form submitted successfully!');
        reset();
    };
    return (
        <form ref={targetSectionRef} className={`bg-primary-color text-black shadow-lg rounded-[16px] min-[1680px]:p-[40px] min-[1370px]:p-[30px] md:py-[30px] md:px-[20px] py-[20px] px-[16px] ${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center min-[1680px]:text-5xl min-[1370px]:text-4xl text-3xl mb-2' style={{gridArea: "a"}}>Contact Form</h2>

            <div className={styles.formGoup} style={{gridArea: "b"}}>
                <label className={styles.label}>Name:</label>
                <input
                    className={`border-[1px]  ${errors.name ? "border-secondary-color" : "border-black"} ${styles.input}`}
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-[20px] font-medium text-secondary-color leading-none mt-2">{errors.name.message}</p>}
            </div>

            <div className={styles.formGoup} style={{gridArea: "c"}}>
                <label className={styles.label}>Email:</label>
                <input
                   className={`border-[1px] ${errors.name ? "border-secondary-color" : "border-black"} ${styles.input}`}
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Email is invalid',
                        },
                    })}
                />
                {errors.email && <p className="text-[20px] font-medium text-secondary-color leading-none mt-2">{errors.email.message}</p>}
            </div>

            <div className={styles.formGoup} style={{gridArea: "d"}}>
                <label className={styles.label}>Contact Number:</label>
                <input
                   className={`border-[1px] ${errors.name ? "border-secondary-color" : "border-black"} ${styles.input}`}
                    type="text"
                    {...register('contactNumber', {
                        required: 'Contact number is required',
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Contact number must be 10 digits',
                        },
                    })}
                />
                {errors.contactNumber && <p className="text-[20px] font-medium text-secondary-color leading-none mt-2">{errors.contactNumber.message}</p>}
            </div>

            <div className={styles.formGoup} style={{gridArea: "e"}}>
                <label className={styles.label}>Your Feedback:</label>
                <textarea
                    className={`border-[1px]  ${errors.name ? "border-secondary-color" : "border-black"} ${styles.input} ${styles.textarea}`}
                    {...register('idea', { required: 'Idea is required' })}
                ></textarea>
                {errors.idea && <p className="text-[20px] font-medium text-secondary-color leading-none mt-2">{errors.idea.message}</p>}
            </div>

            <div className={styles.formGoup} style={{gridArea: "f"}}>
                <label className={styles.label}>Picture (Optional): </label>
                <div className={`relative cursor-pointer border-[1px] border-black ${styles.input} ${styles.upload}`}>
                    <input type="file" {...register('picture')} />
                    <img src={uploadIcon} alt="" className='h-[90%] absolute top-0 bottom-0 left-2/4 -translate-x-2/4 pointer-events-none' />
                </div>
            </div>

            <button style={{gridArea: "g"}} type="submit" className='bg-secondary-color min-[1680px]:h-[80px] min-[1370px]:h-[65px] h-[50px] text-primary-color rounded-[8px] mt-3 min-[1680px]:text-3xl min-[1370px]:text-2xl text-xl border-2 border-transparent hover:bg-black hover:border-black hover:text-white'>Submit</button>
        </form>
    )
}

export default ContactForm
