import React from 'react'
import '../../Css/About/A_First.css'

const A_First = () => {
  return (
    <div className='a-first'>
      <div className='a-main-first'>
        <div className='a-first-item'>
          <h1>At CASHLESSPAY</h1>
          <p>we believe everyone should have complete control over their finances. Our platform is designed with flexibility and customer empowerment at its core, giving you the freedom to manage your money on your terms. Whether you’re sending funds internationally or handling business transactions, CASHLESSPAY is here to make financial control accessible, easy, and reliable for everyone.</p>
          <div className='input-box'>
            <input type="email" placeholder='Your work email' />
            <button>Contact Us</button>
          </div>
         
          
        </div>
        <div className='a-image'>
          <img src="https://img.freepik.com/free-vector/money-transfer-abstract-concept-illustration-credit-card-transfer-digital-payment-method-online-cashback-service-electronic-bank-transaction-sending-money-worldwide_335657-926.jpg?t=st=1731662258~exp=1731665858~hmac=fa1df257599d3b338c193b827ddceaf9d4b798e8246cf1962ae70c4da6823208&w=740" alt="" />
        </div>
      </div>
    </div>
  )
}

export default A_First