import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import css from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const option = event.target.name;

    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const leaveFeedback = this.leaveFeedback;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}








































//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = total => {
//     const { good } = this.state;
//     total = this.countTotalFeedback();
//     const positiveFeedback = (good / total) * 100;
//     return Math.round(positiveFeedback);
//   };

//   render() {
//     this.countPositiveFeedbackPercentage();
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const { good, neutral, bad } = this.state;
//     const objectKeys = Object.keys(this.state);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={objectKeys}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         {total === 0 ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedback}
//             ></Statistics>
//           </Section>
//         )}
//       </div>
//     );
//   }
// }

// export default App;



















  // handleClickButton = e => {
  //   const option = e.target.name;

  //   if (option) {
  //     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  //   }
  // };

  // leaveFeedback = options => {
  //   this.setState(prevState => ({
  //     [options]: prevState[options] + 1
  //   }))
  // }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     return totalFeedback;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const goodFeedback = this.state.good;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedback = (goodFeedback / totalFeedback) * 100;
//     return Math.round(positiveFeedback);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const leaveFeedback = this.leaveFeedback();
//     const total = this.countTotalFeedback();
//     const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const objectKeys = Object.keys(this.state);


//     return (
//       <div className={css.container}>
//         <div className={css.wrapper}>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={objectKeys}
//               onLeaveFeedback={this.onleaveFeedback}
//             />
//           </Section>

//           <Section title="Statistics">
//             {leaveFeedback > 0 ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={positiveFeedback}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }




// render() {
//     this.countPositiveFeedbackPercentage();
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const { good, neutral, bad } = this.state;
//     const objectKeys = Object.keys(this.state);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={objectKeys}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         {total === 0 ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedback}
//             ></Statistics>
//           </Section>
//         )}
//       </div>
//     );
//   }
// }


//    render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = this.countTotalFeedback();
//     const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);
//     // const leaveFeedback = this.leaveFeedback;
//     const handleClickButton = this.handleClickButton;

//     return (
//       <div className={css.container}>
//         <div className={css.wrapper}>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={leaveFeedback}
//               // onLeaveFeedback={handleClickButton}
//             />
//           </Section>

//           <Section title="Statistics">
//             {countTotalFeedback > 0 ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={countTotalFeedback}
//                 positivePercentage={countPositiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }





  //   countPositiveFeedbackPercentage = total => {
//     const { good } = this.state;
//     total = this.countTotalFeedback();
//     const positiveFeedback = (good / total) * 100;
//     return Math.round(positiveFeedback);
//   };

  //   countPositiveFeedbackPercentage = () => {
  //   const totalFeedback = this.countTotalFeedback();
  //   const goodFeedback = this.state.good;
  //   let result = 0;

  //   if (totalFeedback > 0) {
  //     result = Math.ceil((goodFeedback / totalFeedback) * 100);
  //   }

  //   return `${result}%`;

  
  // };






//   onLeaveFeedback = options => {
//     this.setState(prevState => ({
//       [options]: prevState[options] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = total => {
//     const { good } = this.state;
//     total = this.countTotalFeedback();
//     const positiveFeedback = (good / total) * 100;
//     return Math.round(positiveFeedback);
//   };

//   render() {
//     this.countPositiveFeedbackPercentage();
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const { good, neutral, bad } = this.state;
//     const objectKeys = Object.keys(this.state);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={objectKeys}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         {total === 0 ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedback}
//             ></Statistics>
//           </Section>
//         )}
//       </div>
//     );
//   }
// }


//   handleClickButton = e => {
//     const option = e.target.name;

//     if (option) {
//       this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//     }
//   };

//   // countTotalFeedback = () => {
//   //   const totelFeedback = this.state.good + 
//   // }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const totalFeedback = this.countTotalFeedback();
//     const goodFeedback = this.state.good;
//     let result = 0;

//     if (totalFeedback > 0) {
//       result = Math.ceil((goodFeedback / totalFeedback) * 100);
//     }

//     return `${result}%`;

  
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = this.countTotalFeedback();
//     const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);
//     const leaveFeedback = this.leaveFeedback;
//     const handleClickButton = this.handleClickButton;

//     return (
//       <div className={css.container}>
//         <div className={css.wrapper}>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={options}
//               // onLeaveFeedback={leaveFeedback}
//               onLeaveFeedback={handleClickButton}
//             />
//           </Section>

//           <Section title="Statistics">
//             {countTotalFeedback > 0 ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={countTotalFeedback}
//                 positivePercentage={countPositiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
