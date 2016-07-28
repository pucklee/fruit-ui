"use strict";

import React from 'react';
import './styles.less';

export default class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    backBtn: React.PropTypes.string,
    menuBtn: React.PropTypes.string,
    menuClick: React.PropTypes.func,
    backwards: React.PropTypes.func
  }

  static defaultProps = {
    title: document.title,
    menuClick: null,
    backwards: null
  }

  backAction = () => {
    if(backwards){
      backwards()
    }else{
      history.go(-1)
    }
  }

  menuAction = () => {
    if(menuClick){
      menuClick()
    }
  }

  render() {
    let className = "f-header";

    const {title,backBtn,menuBtn} = this.props;

    return (
      <header className={className}>
        <div className="f-header-left" onClick={this.backAction}>
          {backBtn}
        </div>
        <h1 className="f-header-title">
          {title}
        </h1>
        <div className="f-header-right" onClick={this.menuAction}>
          {menuBtn}
        </div>
      </header>
    );
  }
};
