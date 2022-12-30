import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = option => {
    switch (option) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      case 'bad': setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = total => {
    if (!total) return;
    return Math.floor((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage(total);
  return (
    <Section title="Please leave your feedback:">
      <FeedbackOptions
        props={{ good, neutral, bad }}
        onLeaveFeedback={onFeedback}
      />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />) : (
        <Notification message="There is no feedback." />
      )
      }
    </Section>
  );  
}