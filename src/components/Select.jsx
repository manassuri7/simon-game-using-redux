import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Select extends Component {
  static propTypes = {
    selected: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired
  };

  state = {
    showMenu: false
  };

  handleSelectClick = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };

  handleItemClick = e => {
    const { val } = e.target.dataset;
    this.props.onItemClick(val);
  };

  render() {
    const { showMenu } = this.state;
    const { selected, options } = this.props;
    const valueLabel = options.find(item => item.value === selected).label;
    const filteredOptions = options.filter(item => item.value !== selected);

    return (
      <SCSelect onClick={this.handleSelectClick}>
        <SCSelectInner>
          <span>{valueLabel}</span>
          <SCChevron>&#9660;</SCChevron>
        </SCSelectInner>
        {showMenu && (
          <SCSelectList>
            {filteredOptions.map(item => (
              <li key={item.value} data-val={item.value} onClick={this.handleItemClick}>
                {item.label}
              </li>
            ))}
          </SCSelectList>
        )}
      </SCSelect>
    );
  }
}

const SCSelect = styled.div`
  position: relative;
  width: 120px;
  font-size: 18px;
  text-align: left;
  cursor: pointer;
  border: 1px solid #212121;
  border-radius: 2px;
  user-select: none;
`;

const SCSelectInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > span {
    padding: 3px 5px;
  }
`;

const SCChevron = styled.div`
  display: flex;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-left: 1px solid #212121;
  color: #616161;
  background-color: #e0e0e0;
`;

const SCSelectList = styled.ul`
  position: absolute;
  left: -1px;
  right: -1px;
  border: 1px solid #212121;
  list-style: none;
  background-color: #fff;
  > li {
    padding: 3px 5px;
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

export default Select;
