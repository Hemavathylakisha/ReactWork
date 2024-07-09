import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        const users = response.data;
        const userExists = users.some(user => user.email === data.email);

        if (userExists) {
          console.error('Email is already registered');
          // Optionally, you can show an alert or some UI feedback here
        } else {
          axios.post('http://localhost:5000/users', {
            id: users.length + 1, // simple way to generate a new id
            ...data
          })
          .then(response => {
            console.log('Registration successful:', response.data);
            navigate('/'); // Redirect to login page after successful registration
          })
          .catch(error => console.error('Error registering user:', error));
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  return (
    <div className="contentbox">
      <h2 className='aligntext'>Sign Up?</h2>
      <p className='aligntext'>Create your valuable account. Welcome to offer You..!</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('email')} type="email" placeholder="Email" required />
      <input {...register('password')} type="password" placeholder="Password" required /><br/>
      <button type="submit" className='button'>Register</button>
      <Link to="/" className='text'>Sign In?</Link>
    </form>
    </div>
  );
}

export default Register;
