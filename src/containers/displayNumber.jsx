import DisplayNumber from "../components/displayNumber";
import { connect } from "react-redux";
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

// 컴포넌트를 감싸주는 역할 connect()(Wrap할 component)
export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import { Component } from "react";
// import store from "../store";

// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number} />;
//   }
// }
