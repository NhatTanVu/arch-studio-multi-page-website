//import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import localStyles from '../styles/portfolio.module.scss';
import React, { useState, useEffect } from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';

const pageTitle = "Arch Studio Website Challenge | Portfolio";

export default function Portolio() {
    // https://stackoverflow.com/questions/68530854/issue-with-global-css-module-selectors-not-being-pure-in-nextjs
    useEffect(() => {
        document.documentElement.classList.add(localStyles.root);
        return () => {
            document.documentElement.classList.remove(localStyles.root);
        };
    }, []);

    const [group2Ref, isGroup2OnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isGroup2Shown, setIsGroup2Shown] = useState(false);
    useEffect(() => {
        if (isGroup2OnScreen)
            setIsGroup2Shown(true);
    }, [isGroup2OnScreen]);

    const [group3Ref, isGroup3OnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isGroup3Shown, setIsGroup3Shown] = useState(false);
    useEffect(() => {
        if (isGroup3OnScreen)
            setIsGroup3Shown(true);
    }, [isGroup3OnScreen]);

    const [group4Ref, isGroup4OnScreen] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    });
    const [isGroup4Shown, setIsGroup4Shown] = useState(false);
    useEffect(() => {
        if (isGroup4OnScreen)
            setIsGroup4Shown(true);
    }, [isGroup4OnScreen]);

    return (
        <Layout bookmarkText="PORTFOLIO">
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content={pageTitle}
                />
                <meta name="title" property="og:title" content={pageTitle} />
            </Head>
            <div className={localStyles.projects}>
                <div>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Seraph Station</div>
                            <div className={localStyles.date}>September 2019</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Eebox Building</div>
                            <div className={localStyles.date}>August 2017</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Federal II Tower</div>
                            <div className={localStyles.date}>March 2017</div>
                        </div>
                    </a>
                </div>
                <div ref={group2Ref} className={`${isGroup2Shown ? "isShown" : "isHidden"}`}>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Project Del Sol</div>
                            <div className={localStyles.date}>January 2016</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Le Prototype</div>
                            <div className={localStyles.date}>October 2015</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>228B Tower</div>
                            <div className={localStyles.date}>April 2015</div>
                        </div>
                    </a>
                </div>
                <div ref={group3Ref} className={`${isGroup3Shown ? "isShown" : "isHidden"}`}>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Grand Edelweiss Hotel</div>
                            <div className={localStyles.date}>December 2013</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Netcry Tower</div>
                            <div className={localStyles.date}>August 2012</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Hypers</div>
                            <div className={localStyles.date}>January 2012</div>
                        </div>
                    </a>
                </div>
                <div ref={group4Ref} className={`${isGroup4Shown ? "isShown" : "isHidden"}`}>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>SXIV Tower</div>
                            <div className={localStyles.date}>March 2011</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Trinity Bank Tower</div>
                            <div className={localStyles.date}>September 2010</div>
                        </div>
                    </a>
                    <a className={localStyles.project} href="#">
                        <div className={localStyles.mask}></div>
                        <div className={localStyles.inner}>
                            <div className={localStyles.name}>Project Paramour</div>
                            <div className={localStyles.date}>February 2008</div>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}