const React = require('react');

const Slider = (props) => (
  <div>{props.children}</div>
);

Slider.propTypes = {
  children: React.PropTypes.node
};

export default Slider;
