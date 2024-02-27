import {useState} from 'react';
export default function Hero(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      const [errors, setErrors] = useState({});


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
    
        // If there are no errors, you can submit the form
        if (Object.keys(validationErrors).length === 0) {
          // Add your form submission logic here
          console.log('Form submitted:', formData);
        }
      };

      const validateForm = (data) => {
        const errors = {};
        if (!data.firstName.trim()) {
          errors.firstName = 'First Name cannot be empty';
        }
        if (!data.lastName.trim()) {
          errors.lastName = 'Last Name cannot be empty';
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Looks like this is not an email';
        }
        if (!data.password.trim()) {
          errors.password = 'Password cannot be empty';
        }
        return errors;
      };

    return(
        <main className="hero-section">
            <section className="site-desc">
                <h1 className="brand">Learn to code by watching others</h1>
                <p className="brand-tag">
                    See how experienced developers solve problems in real-time. 
                    Watching scripted tutorials is great, but understanding how developers think is invaluable.
                </p>
            </section>
            <section className="login">
                <p className="offer"><span>Try it free 7 days</span> then $20/mo. thereafter</p>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? 'fix-error' : ''}
                    />
                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}

                    <input 
                        type="text"
                        name="lastName"  
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? 'fix-error' : ''}
                    />
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}

                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'fix-error' : ''}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <input 
                        type="Password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'fix-error' : ''}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}

                    <button className="claim-button" type="submit" value={SubmitEvent}>
                        CLAIM YOUR FREE TRIAL
                    </button>

                    <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </form>
            </section>
        </main>
    )
}