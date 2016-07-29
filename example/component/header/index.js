"use strict";

import React from 'react';
import './styles.less';

export default class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    menuClick: React.PropTypes.func,
    backwards: React.PropTypes.func
  }

  static defaultProps = {
    title: document.title,
    backBtn: null,
    menuBtn: null,
    menuClick: null,
    backwards: null
  }

  backAction = () => {
    const {backwards} = this.props;
    if(backwards){
      backwards()
    }else{
      history.go(-1)
    }
  }

  menuAction = () => {
    const {menuClick} = this.props;
    if(menuClick){
      menuClick()
    }
  }

  render() {
    let className = "f-header";

    const {title,backBtn,menuBtn} = this.props;

    return (
      <header className={className}>
        {
          backBtn ?
          <div className="f-header-left" onClick={this.backAction}>
            {backBtn}
          </div> :
          null
        }
        <h1 className="f-header-title">
          {title}
        </h1>
        {
          menuBtn ?
          <div className="f-header-right" onClick={this.menuAction}>
            {menuBtn}
          </div> :
          null
        }
      </header>
    );
  }
};
