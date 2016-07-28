"use strict";

import React from 'react';
import './styles.less';
import Header from '../header';

export default class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <Header title={title}></Header>
                {
                  <div className="hd">
                      <a href="#"><h1 className="title">{title}</h1></a>
                      <p className="sub_title">{subTitle}</p>
                  </div>
                }
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};
