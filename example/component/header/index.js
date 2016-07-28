"use strict";

import React from 'react';
import './styles.less';

export default class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
  }

  static defaultProps = {
    title: document.title,
  }

  render() {
    let className = "f-header";

    const {title} = this.props;

    return (
      <header className={className}>
        <div className="f-header-left">

        </div>
        <h1 className="f-header-title">
          {title}
        </h1>
        <div className="f-header-right">

        </div>
      </header>
    );
  }
};
