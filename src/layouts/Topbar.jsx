import React from 'react'
import SiteNav, { ContentGroup } from 'react-site-nav'
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='w-full fixed'>
            {/* 2. Add SiteNav with ContentGroup as children */}
            <SiteNav
                className='flex flex-1'>
                <ContentGroup title="Home" rootUrl="/" />
                <ContentGroup title="About" height="200">
                    {/* 3. You can add anything in a ContentGroup */}
                    <ul>
                        {/* react router link! */}
                        <li><Link to="/contact-me">Contact Me</Link></li>
                        <li>Another list item</li>
                    </ul>
                </ContentGroup>
                <ContentGroup title="Contact" height="200">
                    Free text followed by some links.<br />
                    <a href="mailto:yusinto@gmail.com">Email</a><br />
                    <a href="https://github.com/yusinto">Github</a>
                </ContentGroup>
                <ContentGroup title="Services" height="200" rootUrl="/services/">

                </ContentGroup>
                <ContentGroup title="FAQ" height="200" rootUrl="/faq/">

                </ContentGroup>
            </SiteNav>
        </div>
    )
}

export default Topbar