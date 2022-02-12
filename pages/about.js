//import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import localStyles from '../styles/about.module.scss';
import React, { useState, useEffect } from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';

const pageTitle = "Arch Studio Website Challenge | About";

export default function About() {
    // https://stackoverflow.com/questions/68530854/issue-with-global-css-module-selectors-not-being-pure-in-nextjs
    useEffect(() => {
        document.documentElement.classList.add(localStyles.root);
        return () => {
            document.documentElement.classList.remove(localStyles.root);
        };
    }, []);

    const [ourHeritageRef, isOurHeritageOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isOurHeritageShown, setOurHeritageShown] = useState(false);
    useEffect(() => {
        if (isOurHeritageOnScreen)
            setOurHeritageShown(true);
    }, [isOurHeritageOnScreen]);

    const [theLeadersRef, isTheLeadersOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isTheLeadersShown, setTheLeadersShown] = useState(false);
    useEffect(() => {
        if (isTheLeadersOnScreen)
            setTheLeadersShown(true);
    }, [isTheLeadersOnScreen]);

    return (
        <Layout bookmarkText="ABOUT US">
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content={pageTitle}
                />
                <meta name="title" property="og:title" content={pageTitle} />
            </Head>
            <div className={localStyles["your-team"]}>
                <h1 className={`${localStyles.L} L`}>About</h1>
                <div className={localStyles["image-hero"]}>
                    <div className={localStyles["mask"]}></div>
                </div>
                <div className={localStyles["content"]}>
                    <div className={localStyles["inner"]}>
                        <div className={localStyles["separator"]}></div>
                        <h2>Your team of<br />professionals</h2>
                        <div className={localStyles["description"]}>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</div>
                    </div>
                </div>
            </div>
            <div ref={ourHeritageRef} className={`${localStyles["our-heritage"]} flex ${isOurHeritageShown ? "isShown" : "isHidden"}`}>
                <div className={`${localStyles["left"]} vertical-flex`}>
                    <div className={localStyles["separator"]}></div>
                    <h2>Our<br />Heritage</h2>
                    <div className={localStyles["description"]}>
                        <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                        <br />
                        <p>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.</p>
                        <br />
                        <p>Our small team of world-class professionals provides input on every project.</p>
                    </div>
                </div>
                <div className={localStyles["right"]}></div>
            </div>
            <div ref={theLeadersRef} className={`${localStyles["the-leaders"]} flex ${isTheLeadersShown ? "isShown" : "isHidden"}`}>
                <h2>The<br />Leaders</h2>
                <div className={`${localStyles["inner"]} grid`}>
                    <div className={`${localStyles["leader"]} vertical-flex`}>
                        <div className={localStyles["avatar"]}></div>
                        <div className={localStyles["description"]}>
                            <div className={localStyles["name"]}>Jake Richards</div>
                            <div className={localStyles["title"]}>Chief Architect</div>
                        </div>
                        <div className={`${localStyles["social-contact"]} flex`}>
                            <div className={localStyles["mask"]}></div>
                            <a href="#" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="" d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 33"><path d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className={`${localStyles["leader"]} vertical-flex`}>
                        <div className={localStyles["avatar"]}></div>
                        <div className={localStyles["description"]}>
                            <div className={localStyles["name"]}>Thompson Smith</div>
                            <div className={localStyles["title"]}>Head of Finance</div>
                        </div>
                        <div className={`${localStyles["social-contact"]} flex`}>
                            <div className={localStyles["mask"]}></div>
                            <a href="#" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="" d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 33"><path d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className={`${localStyles["leader"]} vertical-flex`}>
                        <div className={localStyles["avatar"]}></div>
                        <div className={localStyles["description"]}>
                            <div className={localStyles["name"]}>Jackson Rourke</div>
                            <div className={localStyles["title"]}>Lead Designer</div>
                        </div>
                        <div className={`${localStyles["social-contact"]} flex`}>
                            <div className={localStyles["mask"]}></div>
                            <a href="#" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="" d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 33"><path d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className={`${localStyles["leader"]} vertical-flex`}>
                        <div className={localStyles["avatar"]}></div>
                        <div className={localStyles["description"]}>
                            <div className={localStyles["name"]}>Maria Simpson</div>
                            <div className={localStyles["title"]}>Senior Architect</div>
                        </div>
                        <div className={`${localStyles["social-contact"]} flex`}>
                            <div className={localStyles["mask"]}></div>
                            <a href="#" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="" d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 33"><path d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}