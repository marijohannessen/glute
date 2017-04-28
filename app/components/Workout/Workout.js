import React from 'react';

class Workout extends React.Component {
  render() {
    const {
      title,
      children,
    } = this.props;
    return (
      <div className="workout">
        <h2 className="workout__title">{title}</h2>
        {children}
      </div>
    );
  }
}

export default Workout;
