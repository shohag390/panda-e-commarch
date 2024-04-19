import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';


const Subscribe = () => {
    const [state, handleSubmit] = useForm("xayraeak");
    if (state.succeeded) {
        return <div className='flex justify-center flex-col items-center bg-[#FFECF0] py-[50px]'>
            <p>Thanks for Subscribe!</p>
            <a className='btn mt-[10px]' href="/">Go Back</a>
        </div>;
    }

    return (
        <div className='px-[80px] w-[100%]'>
            <div className='flex justify-center py-[50px] bg-[#FFECF0]'>
                <div className='flex flex-col '>
                    <h4 className='text-3xl pb-[8px]'>LET'S STAY IN TOUCH</h4>
                    <p className='text-gray-600 pb-[10px]'>Get Update on sales, Special and more</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                className='py-[4px] px-[10px] w-[100%]'
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Your Email'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <button className='btn mt-[10px]' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;