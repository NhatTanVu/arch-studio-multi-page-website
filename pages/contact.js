import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import localStyles from '../styles/contact.module.scss'
import { useEffect } from "react";

const pageTitle = "Arch Studio Website Challenge | Contact";

export default function Contact() {
    // https://stackoverflow.com/questions/68530854/issue-with-global-css-module-selectors-not-being-pure-in-nextjs
    useEffect(() => {
        document.documentElement.classList.add(localStyles.root);
        return () => {
            document.documentElement.classList.remove(localStyles.root);
        };
    }, []);

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
                <form className="vertical-flex">
                    <div>
                        <input type="text" className="default" placeholder="Name" />
                        <span className="error"></span>
                    </div>
                    <div>
                        <input type="text" className="default" placeholder="Email" />
                        <span className="error"></span>
                    </div>
                    <div>
                        <textarea type="text" className="default" placeholder="Message" rows="3"></textarea>
                        <span className="error"></span>
                    </div>
                    <button className="default">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </button>
                </form>
            </div>
        </Layout>
    )
}