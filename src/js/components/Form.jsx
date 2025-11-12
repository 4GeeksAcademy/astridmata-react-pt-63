import React, { useState } from 'react'

export const Form = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    function handleEmail(e) {
        // console.log("funciona");
        // console.log(e.target.value);

        setEmail(e.target.value)
    }

    function sendData(event) {

        event.preventDefault()
        console.log("Email: ", email);
        console.log("Password: ", password);

        alert(`enviando Email ${email} y Password ${password}`)
    }


    return (
        <div className='container'>
            <form onSubmit={sendData}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" value={email} onChange={handleEmail} name={"email"} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder='password'
                            onChange={(event) => setPassword(event.target.value)} value={password} />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>

             <h3>el email del usuario es: {email}</h3>
        </div>
    )
}
