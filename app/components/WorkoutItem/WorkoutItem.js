import React from 'react';

class WorkoutItem extends React.Component {
  render() {
    const {
      title,
      gif,
      caption,
    } = this.props;
    return (
      <div className="workout-item">
        <h3 className="workout-item__title">{title}</h3>
        <h4 className="workout-item__caption">{caption}</h4>
        <div className="workout-item__desc">
          <img className="workout-item__gif" src={gif} />
        </div>
      </div>
    );
  }
}

export default WorkoutItem;
