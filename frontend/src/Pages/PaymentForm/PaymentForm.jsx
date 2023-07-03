import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import styless from './payment.module.css'

export default function PaymentForm() {

    const { role } = useParams()

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')

    async function onSubmit(e) {
        e.preventDefault()

        if (cardNumber.length < 16) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Check Your Card Details!',
            })
            return;
        }

        const id = localStorage.getItem('id')


        if (role === 'Showroom Owner') {
            axios.put(`http://localhost:7070/api/userr/updatepaid/${id}`);
            axios.put(`http://localhost:7070/api/userr/updatepaid/${id}`);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Payment Successfull!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/showroomOwner";
                }
            })
        }
        else if (role === 'Lowyer') {
            axios.put(`http://localhost:7070/api/userr/updatepaid/${id}`);
            axios.put(`http://localhost:7070/api/userr/updatepaid/${id}`);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Payment Successfull!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/lawyer";
                }
            })
        }

        localStorage.setItem('paid', true)
    }


    return (
        <>
            <div className={styless.container}>
                <div className={styless.card}>
                    <p className={styless.h8}>Payment Details</p>
                    <form onSubmit={onSubmit}>
                        <div className={styless.row}>
                            <div className={styless.col-12}>
                                <div className={styless.flex}>
                                    <p className={styless.text}>Person Name</p>
                                    <input
                                        className={styless.form_control}
                                        type="text"
                                        placeholder="Barry Allen"
                                        required
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className={styless.col-12}>
                                <div className={styless.dflex}>
                                    <p className={styless.text}>Card Number</p>
                                    <input
                                        className={styless.form_control}
                                        type="text"
                                        placeholder="1234 5678 435678"
                                        required
                                        maxLength={16}
                                        onChange={(e) => setCardNumber(e.target.value)} />
                                </div>
                            </div>
                            <div className={styless.col-6}>
                                <div className={styless.d_flex }>
                                    <p className={styless.text}>Expiry</p>
                                    <input
                                        className={styless.form_control}
                                        type="text"
                                        placeholder="MM/YYYY"
                                        required
                                        maxLength={7}
                                        onChange={(e) => setExpiry(e.target.value)} />
                                </div>
                            </div>
                            <div className={styless.col-6}>
                                <div className={styless.d_flex}>
                                    <p className={styless.text }>CVV/CVC</p>
                                    <input
                                        className={styless.form_control}
                                        type="password"
                                        placeholder="***"
                                        required
                                        maxLength={3}
                                        setExpiry={(e) => setCvv(e.target.value)} />
                                </div>
                            </div><br/>
                            <div className={styless.col-12}>
                                {/* submit button input */}
                                <input className={styless.btn_primary} type="submit" value="Pay Now" required />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
