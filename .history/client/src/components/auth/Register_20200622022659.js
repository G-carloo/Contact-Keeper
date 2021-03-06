import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlfor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onchange} />
        </div>
        <div className='form-group'>
          <label htmlfor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onchange} />
        </div>
        <div className='form-group'>
          <label htmlfor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onchange}
          />
        </div>
        <div className='form-group'>
          <label htmlfor='password2'>Confirm Password2</label>
          <input
            type='password2'
            name='password2'
            value={password2}
            onChange={onchange}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
