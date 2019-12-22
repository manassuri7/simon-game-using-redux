import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import Select from './Select';

// store
import { changeDifficulty } from '../store/actions';

class Header extends Component {
  static propTypes = {
    difficulty: PropTypes.string.isRequired,
    colorsSequence: PropTypes.array.isRequired,
    isPlayingSequence: PropTypes.bool.isRequired,
    isSequenceFailed: PropTypes.bool.isRequired,
    changeDifficulty: PropTypes.func.isRequired
  };

  handleSelect = value => {
    console.log(value);
  };

  get statusTitle() {
    const { colorsSequence, isPlayingSequence, isSequenceFailed } = this.props;

    if (isPlayingSequence) return 'Listen...';
    if (isSequenceFailed) return 'Ooops :( You failed the sequence. ';
    if (colorsSequence.length > 0) return 'Be careful!';

    return 'Welcome! Press "Play".';
  }

  render() {
    const { difficulty, colorsSequence, changeDifficulty } = this.props;
    const roundNumber = colorsSequence.length;

    const selectOptions = [
      { label: 'Easy', value: 'easy' },
      { label: 'Medium', value: 'medium' },
      { label: 'Hard', value: 'hard' }
    ];

    return (
      <SCHeaderWrap>
        <SCTitle>Pattern Game</SCTitle>
        <SCDifficultyWrap>
          <span>Difficulty:</span>
          <Select
            selected={difficulty}
            options={selectOptions}
            onSelect={this.handleSelect}
            onItemClick={changeDifficulty}
          />
        </SCDifficultyWrap>
        <SCRoundsCounter>
          Level: <span>{roundNumber}</span>
        </SCRoundsCounter>
        <SCStatusTitle>{this.statusTitle}</SCStatusTitle>
      </SCHeaderWrap>
    );
  }
}

const SCHeaderWrap = styled.div`
  padding: 20px 0 30px 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const SCTitle = styled.h1`
  font-size: 36px;
  padding-bottom: 10px;
`;

const SCRoundsCounter = styled.p`
  font-size: 24px;
  padding-bottom: 15px;
  > span {
    color: #ff5722;
  }
`;

const SCDifficultyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  font-size: 20px;
  > span {
    padding-right: 10px;
  }
`;

const SCStatusTitle = styled.p`
  font-size: 24px;
  color: #3d5afe;
`;

const mapStateToProps = ({ difficulty, colorsSequence, isPlayingSequence, isSequenceFailed }) => ({
  difficulty,
  colorsSequence,
  isPlayingSequence,
  isSequenceFailed
});

export default connect(mapStateToProps, { changeDifficulty })(Header);
