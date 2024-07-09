import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        const users = response.data;
        const user = users.find(user => user.email === data.email && user.password === data.password);
        
        if (user) {
          console.log('Login successful:', user);
          // Store user data in localStorage or context for session management
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/Home'); // Redirect to the home page or dashboard
        } else {
          console.error('Invalid email or password');
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  return (
    <div className="contentbox">
      <h2 className='aligntext'>Sign In</h2>
      <p className='aligntext'>Using your valuable account</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="email" placeholder="Email" required />
      <input {...register('password')} type="password" placeholder="Password" required />   <br />  
      <button type="submit" className='button'>Login</button> 
      <Link to="/register" className='text'>Creating an account?</Link>    
    </form>
     </div>
  );
}

export default Login;
