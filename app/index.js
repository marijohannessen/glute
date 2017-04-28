import React from 'react';
import ReactDOM from 'react-dom';
import Workout from './components/Workout/Workout';
import WorkoutItem from './components/WorkoutItem/WorkoutItem';
import './main.scss';

class App extends React.Component {
  render() {
    // workout a
    const hipthrust = require('./images/barbell-hip-thrust.gif');
    const frontsquat = require('./images/front-squad.gif');
    const romaniandeadlift = require('./images/romanian-deadilft.gif');
    const sidelyingclam = require('./images/side-lying-clam.gif');
    const backextension = require('./images/back-extension.jpg');
    const hipabductor = require('./images/hip-abductor.png');

    // workout b
    const singlehipthrust = require('./images/single-hip-thrust.gif');
    const skatersquat = require('./images/skater-squat.jpg');
    const walkinglunge = require('./images/walkinglunge.png');
    const singlelegdeadlift = require('./images/singlelegdeadlift.gif');
    const cableabduction = require('./images/cable-standing-abduction.jpg');
    const revhyper = require('./images/rev-hyper.jpg');

    // workout c
    const dumbbellglute = require('./images/dumbbell-glute-bridge.jpg');
    const zerchersquat = require('./images/zercher-squat.gif');
    const dumbbellextension = require('./images/zercher-squat.gif');
    const sidehipraise = require('./images/side-hip-raise.jpg');
    const gobletsquat = require('./images/goblet-squat.gif');
    const romaniandumbbell = require('./images/romanian-dumbbell.gif');

    return (
      <main className="container">
        <header className="header">
          <h1 className="logo">glute.</h1>
        </header>
        <section className="workouts">
          <Workout title="Workout A">
            <WorkoutItem
              title="Barbell hip thrust"
              gif={hipthrust}
              caption="3 sets of 8-12 reps"
            />
            <WorkoutItem
              title="Barbell front squat"
              gif={frontsquat}
              caption="3 sets of 8-12 reps"
            />
            <WorkoutItem
              title="Barbell Romanian deadlift"
              gif={romaniandeadlift}
              caption="3 sets of 8-12 reps"
            />
            <WorkoutItem
              title="Bodyweight back extension"
              gif={backextension}
              caption="3 sets of 20 reps"
            />
            <WorkoutItem
              title="Hip abductor"
              gif={hipabductor}
              caption="1 set of 30 reps"
            />
            <WorkoutItem
              title="Side lying clam"
              gif={sidelyingclam}
              caption="1 set of 30 reps"
            />
          </Workout>
          <Workout title="Workout B">
            <WorkoutItem
              title="Shoulders-elevated single leg hip thrust"
              gif={singlehipthrust}
              caption="3 sets of 8-12 reps"
            />
            <WorkoutItem
              title="Bodyweight skater squat"
              gif={skatersquat}
              caption="3 sets of 8-12 reps"
            />
            <WorkoutItem
              title="Walking lunge"
              gif={walkinglunge}
              caption="3 sets of 10-20 reps (each side)"
            />
            <WorkoutItem
              title="Dumbbell single-leg Romanian deadlift"
              gif={singlelegdeadlift}
              caption="3 sets of 8-12 reps (each side)"
            />
            <WorkoutItem
              title="Cable standing abduction"
              gif={cableabduction}
              caption="1 set of 30 reps (each side)"
            />
            <WorkoutItem
              title="Bodyweight reverse hyper"
              gif={revhyper}
              caption="3 sets of 20 reps"
            />
          </Workout>
          <Workout title="Workout C">
            <WorkoutItem
              title="Barbell glute bridge"
              gif={dumbbellglute}
              caption="3 sets of 10 reps"
            />
            <WorkoutItem
              title="Barbell zercher squat"
              gif={zerchersquat}
              caption="3 sets of 10 reps"
            />
            <WorkoutItem
              title="Goblet full squat"
              gif={gobletsquat}
              caption="3 sets of 10 reps"
            />
            <WorkoutItem
              title="Dumbbell Romanian deadlift"
              gif={romaniandumbbell}
              caption="3 sets of 10 reps"
            />
            <WorkoutItem
              title="Dumbbell back extension"
              gif={backextension}
              caption="3 sets of 10 reps"
            />
            <WorkoutItem
              title="Side lying hip raise"
              gif={sidehipraise}
              caption="1 sets of 12 reps"
            />
          </Workout>
        </section>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
