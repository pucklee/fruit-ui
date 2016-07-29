import React from 'react';
import styles from './styles.less';
import classNames from 'classnames';

export default class NumberBox extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.string,
    defaultValue: React.PropTypes.num,
  }

  static defaultProps = {
    disabled: 'false',
    defaultValue: 0
  }

  state = {
    value: this.props.defaultValue,
  }

  subtractClick = () =>{
    const {value, disabled} = this.state;
    if(disabled=="false"){
      this.setState({value: value - 1})
    }
  }

  addClick = () =>{
    const {value, disabled} = this.state;
    if(disabled=="false"){
      this.setState({value: value + 1})
    }
  }

  render () {
    const { size, disabled, className, children, ...others} = this.props;
    let container = classNames({
      'f-numberBox': true,
    })
    let minusBtn = classNames({

    })
    let plusBtn = classNames({

    })
    return (
      <div className={container}>
        <button className={minusBtn} onClick={this.subtractClick}></button>
        <input
          className="f-numberBox-input"
          type="number"
          value={this.state.value}
          disabled={disabled}
        />
        <button className={plusBtn} onClick={this.addClick}></button>
      </div>
    );
  }
}
