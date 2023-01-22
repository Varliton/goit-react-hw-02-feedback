import PropTypes from 'prop-types';
import {
  Button,
  FeedbackList,
  FeedbackListItem,
} from './FeedbackOptions.style';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackList>
        <FeedbackListItem>
          <Button type="Button" value="good" onClick={onLeaveFeedback}>
            Good
          </Button>
        </FeedbackListItem>
        <FeedbackListItem>
          <Button type="Button" value="bad" onClick={onLeaveFeedback}>
            Bad
          </Button>
        </FeedbackListItem>
        <FeedbackListItem>
          <Button type="Button" value="neutral" onClick={onLeaveFeedback}>
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
