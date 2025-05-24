import './Contact.css'
export function Contact() {
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <div className="form-group"></div>
                <label>Email:</label>
                <input type="email"/>
            </form>
            <form className="contact-form">
                <div className="form-group"></div>
                <label>Subject:</label>
                <input type="text"/>
            </form>
            <form className="contact-form">
                <div className="form-group"></div>
                <label>Message:</label>
                <textarea rows="5"/>
            </form>

            <button type="submit" className="submit-btn"></button>
        </div>
    );
}