import PropTypes from 'prop-types';
import {
  Button,
  FeedbackList,
  FeedbackListItem,
} from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackList>
        <FeedbackListItem>
          <Button type="Button" value={options[0]} onClick={onLeaveFeedback}>
            Good
          </Button>
        </FeedbackListItem>
        <FeedbackListItem>
          <Button type="Button" value={options[1]} onClick={onLeaveFeedback}>
            Bad
          </Button>
        </FeedbackListItem>
        <FeedbackListItem>
          <Button type="Button" value={options[2]} onClick={onLeaveFeedback}>
            Neutral
          </Button>
        </FeedbackListItem>
      </FeedbackList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
