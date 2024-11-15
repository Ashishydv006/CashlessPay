import React from 'react'
import '../../Css/Contact/Co_First.css'

const Co_First = () => {
    return (
        <div >
            <div className='co-first'>
                <div className='co-main-first'>
                    <div className='co-first-item'>
                        <h1>We'd love to</h1>
                        <h1>hear from you</h1>
                    </div>
                    <div className='co-first-pragraph'>
                        <p>hello@blaze.money</p>
                        <p>founders@blaze.money</p>
                    </div>
                </div>
                <div className='main-form'>
                    <h3>Send us a message</h3>
                    <form>
                        <div className='form-first-item'>
                            <input type="text" placeholder='your name' />
                            <input type="text" placeholder='your name' />
                        </div>
                        <div className='form-second-item'>
                            <input type="text" placeholder='your name' />
                            <input type="text" placeholder='your name' />
                        </div>
                        <div className='from-drop-down'>
                            <select>
                                <option value="Why do you want to get in touch?">Why do you want to get in touch?</option>
                                <option>General inquiry</option>
                                <option>Technical support</option>
                                <option>Partnership opportunity</option>
                                <option>Account deletion</option>
                            </select>
                        </div>
                        <div className='text-from'>
                            <textarea  placeholder='Enter Your Message'></textarea>
                        </div>
                        <div className='form-btn'>
                            <button>SUBMIT YOUR MESSAGE </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Co_First