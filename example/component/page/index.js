"use strict";

import React from 'react';
import './styles.less';
import Header from '../header';

export default class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <Header
                  title={title}
                  backBtn=<span className="fi-left"></span>
                  menuBtn=<span className="fi-menu"></span>
                ></Header>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};
