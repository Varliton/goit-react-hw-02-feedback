import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total = 0,
  positivePercentage,
}) => {
  return total === 0 ? (
    <Notification message="There is no feedback :P" />
  ) : (
    <div>
      <h2>Statistics</h2>
      <StatisticsList>
        <li>Good: {good}</li>
        <li>Bad: {bad}</li>
        <li>Neutral: {neutral}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </StatisticsList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
