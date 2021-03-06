import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';
import { getValue, getStep } from '../../redux/counter/counter-selector';
import './Counter.css';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(actions.increment(value)),
//   onDecrement: value => dispatch(actions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
