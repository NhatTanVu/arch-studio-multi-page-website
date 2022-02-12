//import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import Layout from '../components/layout';
import localStyles from '../styles/index.module.css';
import useElementOnScreen from '../hooks/useElementOnScreen';

const pageTitle = "Arch Studio Website Challenge | Home";

export default function Home() {
    const backgroundImages = ["image-hero-paramour.jpg", "image-hero-seraph.jpg", "image-hero-federal.jpg", "image-hero-trinity.jpg"];
    const [slideNumber, setSlideNumber] = useState(0);
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023.9 });

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideNumber(slideNumber => {
                let nextSlideNumber = (slideNumber < 3) ? (slideNumber + 1) : 0;
                return nextSlideNumber;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const [welcomeToArchRef, isWelcomeToArchOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isWelcomeToArchShown, setIsWelcomeToArchShown] = useState(false);
    useEffect(() => {
        if (isWelcomeToArchOnScreen)
            setIsWelcomeToArchShown(true);
    }, [isWelcomeToArchOnScreen]);

    const [smallTeamBigIdeasRef, isSmallTeamBigIdeasOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isSmallTeamBigIdeasShown, setSmallTeamBigIdeasShown] = useState(false);
    useEffect(() => {
        if (isSmallTeamBigIdeasOnScreen)
            setSmallTeamBigIdeasShown(true);
    }, [isSmallTeamBigIdeasOnScreen]);

    const [featuredRef, isFeaturedOnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isFeaturedShown, setIsFeaturedShown] = useState(false);
    useEffect(() => {
        if (isFeaturedOnScreen)
            setIsFeaturedShown(true);
    }, [isFeaturedOnScreen]);

    return (
        <Layout bookmarkText="HOME">
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content={pageTitle}
                />
                <meta name="og:title" content={pageTitle} />
            </Head>
            <div className={localStyles['project-paramour']} style={{ backgroundImage: `url(/assets/home/${isDesktop ? "desktop" : (isTablet ? "tablet" : "mobile")}/${backgroundImages[slideNumber]})` }}>
                <div className={localStyles.mask}></div>
                <div className={localStyles.inner}>
                    <div className={`${localStyles.data} ${(slideNumber == 0) ? localStyles.active : ""}`}>
                        <h1 className={`${localStyles.S} S`}>Project Paramour</h1>
                        <div>
                            Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
                        </div>
                    </div>
                    <div className={`${localStyles.data} ${(slideNumber == 1) ? localStyles.active : ""}`}>
                        <h1 className={`${localStyles.S} S`}>Seraph Station</h1>
                        <div>
                            The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.
                        </div>
                    </div>
                    <div className={`${localStyles.data} ${(slideNumber == 2) ? localStyles.active : ""}`}>
                        <h1 className={`${localStyles.S} S`}>Federal II Tower</h1>
                        <div>
                            A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.
                        </div>
                    </div>
                    <div className={`${localStyles.data} ${(slideNumber == 3) ? localStyles.active : ""}`}>
                        <h1 className={`${localStyles.S} S`}>Trinity Bank Tower</h1>
                        <div>
                            Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.
                        </div>
                    </div>
                    <a className='default' href="/portfolio">
                        <span>See Our Portfolio</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </a>
                </div>
                <div className={`${localStyles['number-button-container']} number-button-container`}>
                    <button className={`default number ${(slideNumber == 0) ? "active" : ""}`}
                        onClick={() => { setSlideNumber(0) }}>01</button>
                    <button className={`default number ${(slideNumber == 1) ? "active" : ""}`}
                        onClick={() => { setSlideNumber(1) }}>02</button>
                    <button className={`default number ${(slideNumber == 2) ? "active" : ""}`}
                        onClick={() => { setSlideNumber(2) }}>03</button>
                    <button className={`default number ${(slideNumber == 3) ? "active" : ""}`}
                        onClick={() => { setSlideNumber(3) }}>04</button>
                </div>
            </div>
            <div ref={welcomeToArchRef} className={`${localStyles["welcome-to-arch-studio"]} ${isWelcomeToArchShown ? "isShown" : "isHidden"}`}>
                <h1 className={`${localStyles.L} L`}>Welcome</h1>
                <div className={`flex ${localStyles.inner}`}>
                    <div className={localStyles.left}>
                        <div className={localStyles.inner}>
                            <h2>Welcome to Arch Studio</h2>
                            <div>
                                <p>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.</p>
                                <br />
                                <p>Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.</p>
                                <br />
                                <p>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
                            </div>
                        </div>
                    </div>
                    <div className={localStyles.right}></div>
                </div>
            </div>
            <div ref={smallTeamBigIdeasRef} className={`${localStyles["small-team-big-ideas"]} ${isSmallTeamBigIdeasShown ? "isShown" : "isHidden"}`}>
                <div className={localStyles.mask}></div>
                <div className={localStyles.inner}>
                    <h2>Small team, big ideas</h2>
                    <a className="default" href="/about">
                        <span>About Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </a>
                </div>
            </div>
            <div ref={featuredRef} className={`${isFeaturedShown ? "isShown" : "isHidden"}`}>
                <div className={`${localStyles.featured} flex`}>
                    <h2>Featured</h2>
                    <a className="default" href="/portfolio">
                        <span>See All</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </a>
                </div>
                <div className={`${localStyles['featured-projects']} flex`}>
                    <div className={localStyles.project}>
                        <h1 className={`${localStyles.L} L`}>1</h1>
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div>Project Del Sol</div>
                            <div>View All Projects</div>
                        </div>
                    </div>
                    <div className={localStyles.project}>
                        <h1 className={`${localStyles.L} L`}>2</h1>
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div>228B Tower</div>
                            <div>View All Projects</div>
                        </div>
                    </div>
                    <div className={localStyles.project}>
                        <h1 className={`${localStyles.L} L`}>3</h1>
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div>Le Prototype</div>
                            <div>View All Projects</div>
                        </div>
                    </div>
                    <a className="default" href="/portfolio">
                        <span>See All</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><g fill="none" fillRule="evenodd" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </a>
                </div>
            </div>
        </Layout>
    )
}