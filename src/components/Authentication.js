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
    const {firstName, lastName, userName, password, confirmPassword, email} = formValue;

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value});
    };

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
                                                "Lütfen Kullanıcı Adı ve Şifrenizi giriniz." :
                                                "Kullanıcı detaylarını giriniz."
                                        }
                                    </p>
                                    {showRegister && (
                                        <>
                                            <div className="form-outlined form-white mb-4">
                                                <MDBInput 
                                                    type='text'
                                                    name='firstName'
                                                    value={firstName}
                                                    onChange={handleChange}
                                                    placeholder="Adınız"
                                                    className='form-control form-coontrol-lg'
                                                />
                                            </div>
                                            <div className="form-outlined form-white mb-4">
                                                <MDBInput 
                                                    type='text'
                                                    name='lastName'
                                                    value={lastName}
                                                    onChange={handleChange}
                                                    placeholder="Soy Adınız"
                                                    className='form-control form-coontrol-lg'
                                                />
                                            </div>
                                            <div className="form-outlined form-white mb-4">
                                                <MDBInput 
                                                    type='email'
                                                    name='email'
                                                    value={email}
                                                    onChange={handleChange}
                                                    placeholder="Mail Adresiniz"
                                                    className='form-control form-coontrol-lg'
                                                />
                                            </div>
                                        </>
                                    )}
                                    <div className="form-outlined form-white mb-4">
                                        <MDBInput 
                                            type='text'
                                            name='userName'
                                            value={userName}
                                            onChange={handleChange}
                                            placeholder="Kullanıcı Adı"
                                            className='form-control form-coontrol-lg'
                                        />
                                    </div>
                                    <div className="form-outlined form-white mb-4">
                                        <MDBInput 
                                            type='password'
                                            name='password'
                                            value={password}
                                            onChange={handleChange}
                                            placeholder="Şifre"
                                            className='form-control form-coontrol-lg'
                                        />
                                    </div>
                                    {showRegister && (
                                        <div className="form-outlined form-white mb-4">
                                            <MDBInput 
                                                type='password'
                                                name='confirmPassword'
                                                value={confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Tekrar Şifre"
                                                className='form-control form-coontrol-lg'
                                            />
                                        </div>
                                    )}
                                    {
                                        !showRegister ? (
                                            <button className="btn btn-outline-light btn-lg px-5" type='button'>
                                                Giriş Yap
                                            </button>
                                        ) : (
                                            <button className="btn btn-outline-light btn-lg px-5" type='button'>
                                                Kaydol
                                            </button>
                                        )
                                    }
                                    </div>
                                    <div>
                                        <h5 className="mb-0">
                                            {
                                                !showRegister ? (
                                                    <>
                                                        Hesabın yok mu?
                                                        <p 
                                                            className="text-white-50 fw-bold"
                                                            style={{cursor : "pointer"}}
                                                            onClick={() => setShowRegister(true)}
                                                        >
                                                            Kayıt Ol
                                                        </p> 
                                                    </>
                                                ) : (
                                                    <>
                                                        Şifre yanlış
                                                        <p 
                                                            className="text-white-50 fw-bold"
                                                            style={{cursor : "pointer"}}
                                                            onClick={() => setShowRegister(false)}
                                                        >
                                                            Giriş Yap
                                                        </p> 
                                                    </>
                                                )
                                            }
                                        </h5>
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