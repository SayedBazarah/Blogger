import { useRef } from "react";
import Style from "./contactForm.module.css";

function ContactForm() {
  const customerName = useRef();
  const customerEmail = useRef();
  const customerPhone = useRef();
  const customerMessage = useRef();

  const formHandller = (event) => {
    event.preventDefault();
    if (
      customerEmail.current.value &&
      customerName.current.value &&
      customerPhone.current.value
    ) {
      const formObject = {
        name: customerName.current.value,
        phone: customerPhone.current.value,
        email: customerEmail.current.value,
      };
      console.log(formObject);
    } else {
      console.log("Complete the form");
    }
  };
  return (
    <div className={Style.container}>
      <div>
        <h1>Contact US</h1>
      </div>
      <div className={Style.form}>
        <form onSubmit={formHandller}>
          <input required ref={customerName} type="text" placeholder="Name" />
          <input
            required
            ref={customerEmail}
            type="email"
            placeholder="Email"
          />
          <input required ref={customerPhone} type="text" placeholder="Phone" />
          <textarea ref={customerMessage} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
