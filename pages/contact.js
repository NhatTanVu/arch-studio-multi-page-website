import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import localStyles from '../styles/contact.module.scss'

const pageTitle = "Arch Studio Website Challenge | Contact";

export default function Contact() {
    // https://stackoverflow.com/questions/68530854/issue-with-global-css-module-selectors-not-being-pure-in-nextjs
    useEffect(() => {
        document.documentElement.classList.add(localStyles.root);
        return () => {
            document.documentElement.classList.remove(localStyles.root);
        };
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [summary, setSummary] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const onNameChange = (event) => {
        setName(event.target.value);
        setIsFormValid(validateForm(event.target.value, email, message));
    };
    const onEmailChange = (event) => {
        setEmail(event.target.value);
        setIsFormValid(validateForm(name, event.target.value, message));
    };
    const onMessageChange = (event) => {
        setMessage(event.target.value);
        setIsFormValid(validateForm(name, email, event.target.value));
    };
    const onSubmit = (event) => {
        if (validateForm(name, email, message))
            setSummary("Your message was sent. Thanks for contacting us!");
        else
            setSummary("Please correct the above errors before sending");
        event.preventDefault();
    };

    // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const validateForm = (localName, localEmail, localMessage) => {
        return localName != "" && localEmail != "" && validateEmail(localEmail) && localMessage != "";
    };

    return (
        <Layout bookmarkText="CONTACT">
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content={pageTitle}
                />
                <meta name="og:title" content={pageTitle} />
            </Head>
            <div className={localStyles["tell-us"]}>
                <h1 className={`${localStyles.L} L`}>Contact</h1>
                <div className={localStyles["image-hero"]}>
                    <div className={localStyles["mask"]}></div>
                </div>
                <div className={localStyles["content"]}>
                    <div className={localStyles["inner"]}>
                        <div className={localStyles["separator"]}></div>
                        <h2>Tell us about your project</h2>
                        <div className={localStyles["description"]}>We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</div>
                    </div>
                </div>
            </div>
            <div className={`${localStyles["contact-details"]} grid`}>
                <div className={localStyles["separator"]}></div>
                <h2 className={localStyles["title"]}>Contact Details</h2>
                <div className={localStyles["office"]}>
                    <div className={localStyles["title"]}>Main Office</div>
                    <div className={`${localStyles["vertical-flex"]} vertical-flex`}>
                        <div className={localStyles["details"]}>
                            <span>Mail :  archone@mail.com</span><br />
                            <span>Address :  1892 Chenoweth Drive TN</span><br />
                            <span>Phone :  123-456-3451</span>
                        </div>
                        <a href="#">
                            <span>View on Map</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                        </a>
                    </div>
                </div>
                <div className={localStyles["office"]}>
                    <div className={localStyles["title"]}>Office II</div>
                    <div className={`${localStyles["vertical-flex"]} vertical-flex`}>
                        <div className={localStyles["details"]}>
                            <span>Mail :  archtwo@mail.com</span><br />
                            <span>Address :  3399 Wines Lane TX</span><br />
                            <span>Phone :  832-123-4321</span>
                        </div>
                        <a href="#">
                            <span>View on Map</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className={localStyles["map"]}></div>
            <div className={`${localStyles["connect-with-us"]} flex`}>
                <h2 className={localStyles["title"]}>Connect with us</h2>
                <form className="vertical-flex" onSubmit={onSubmit}>
                    <div className={name == "" ? "error-container" : ""}>
                        <input type="text" className={`default ${name == "" ? "error" : ""}`} placeholder="Name" value={name} onChange={onNameChange} />
                        {name == "" && <span className="error">Can't be empty</span>}
                    </div>
                    <div className={(email == "" || !validateEmail(email)) ? "error-container" : ""}>
                        <input type="text" className={`default ${(email == "" || !validateEmail(email)) ? "error" : ""}`} placeholder="Email" value={email} onChange={onEmailChange} />
                        {email == "" && <span className="error">Can't be empty</span>}
                        {email != "" && !validateEmail(email) && <span className="error">Please use a valid email address</span>}
                    </div>
                    <div className={message == "" ? "error-container" : ""}>
                        <textarea type="text" className={`default ${message == "" ? "error" : ""}`} placeholder="Message" value={message} onChange={onMessageChange} rows="3"></textarea>
                        {message == "" && <span className="error">Can't be empty</span>}
                    </div>
                    <button className="default" type="submit" disabled={!isFormValid}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </button>
                    <div className={localStyles["summary"]}>
                        {summary}
                    </div>
                </form>
            </div>
        </Layout>
    )
}