import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';

const initialState = {
  firstName : "",
  lastName: "",
  userName : "",
  password: "",
  confirmPassword : "",
  email: "",
  phoneNumber : "",
  roles : [
    "User"
  ]
};

const Authentication = () => {

    const [formValue, setFormValue] = useState(initialState);
    const [showRegister, setShowRegister] = useState(false);
    const {firstName, lastName, userName, password, confirmPassword, email, phoneNumber} = formValue;

    const handleChange = () => {

    }

    return (
        <section className='vh-100 gradient-custom'>
            <div className="container py4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius : "1rem"}}>
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">
                                        {
                                            !showRegister ? 
                                                "Giriş" :
                                                "Kayıt Ol"
                                        }
                                    </h2>
                                    <p className="text-white-5 mb-4">
                                        {
                                            !showRegister ? 
                                                "Lütfen Email ve Şifrenizi giriniz." :
                                                "Kullanıcı detaylarını giriniz."
                                        }
                                    </p>
                                    <div className="form-outlined form-white mb-4">
                                        <MDBInput 
                                            type='email'
                                            name='email'
                                            value={email}
                                            onChange={handleChange}
                                            label="Email"
                                            className='form-control form-coontrol-lg'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Authentication