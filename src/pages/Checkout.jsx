import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    axios.post('http://localhost:5000/checkout', data)
      .then(response => console.log(response));
      navigate('/Home')
      .catch(error => console.error(error));

  };

  return (
    <div className="contentbox">
      <h4 className='info'>Provide your info for happy serving..!</h4>
    <form onSubmit={handleSubmit(onSubmit)} id="heightfix">
      <input {...register('name')} placeholder="Name" required />
      <input {...register('address')} placeholder="Address" required />
      <input {...register('email')} type="email" placeholder="Email" required /><br />
      <button type="submit" className='button'>Submit Order</button>
    </form>
    </div>
  );
}

export default Checkout;
