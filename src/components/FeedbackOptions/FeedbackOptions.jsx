import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return ( 
      <div className={css.division}>
        {options.map(option => (
            <button
              className={css.button}
              key={option}
              name={option}    
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
        ))}
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

