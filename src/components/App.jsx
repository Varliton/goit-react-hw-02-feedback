import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = event => {
    const feedbackOption = event.target.value;
    this.setState(prevState => ({
      [feedbackOption]: prevState[feedbackOption] + 1,
    }));
    this.countPositiveFeedbackPercentage();
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.bad + prevState.neutral,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good * 100) / prevState.total),
    }));
  };
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </Section>
    );
  }
}
