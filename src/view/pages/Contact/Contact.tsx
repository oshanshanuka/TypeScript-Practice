import './Contact.css';
import {useForm} from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FormData = {
    email: string;
    subject: string;
    message: string;
}
export function Contact() {
    const {register,
        handleSubmit,
        formState: {errors}} = useForm();

    const  onSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
        alert(`Thank you for contacting us, ${data.subject}! We will get back to you soon.`);
        // Here you can handle the form submission, e.g., send data to an API
    }
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form"
                  onSubmit = {handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                           {
                               ...register('email', {
                                   required: 'Email is required',
                                   pattern: {
                                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                       message: 'Invalid email address'
                                   }
                               })
                           }
                    />
                    { errors.email ?
                        <span className="error">{ errors.email.message }</span> : ' '}
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text"
                           {
                               ...register('subject', {
                                   required: 'Subject is required',
                                   pattern: {
                                       value: /^[a-zA-Z0-9\s]+$/,
                                       message: 'Subject can only contain letters, numbers, and spaces'
                                   },
                                   minLength: {
                                       value: 5,
                                       message: 'Subject must be at least 5 characters long'
                                   }
                               })
                           }
                    />
                    { errors.subject ?
                        <span className="error">{ errors.subject.message }</span> : ' '}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="messege" name="messege" required rows = "4" cols = "50" placeholder="Enter your message here..."
                              {
                                  ...register('message', {
                                      required: true
                                  })
                              }
                    >
                    </textarea>
                    { errors.messege ?
                        <span className="error">{ errors.messege.message }</span> : ' '}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}