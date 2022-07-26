import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

// redux의 dispatch 를 react props 랑 연결
function mapDispatchToProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

// connect() 가 AddNumber 컴포넌트를 감싸줍니다
// AddNumber는 Redux에 의존하지 않아도 됩니다
export default connect(null, mapDispatchToProps)(AddNumber);
// import React, { Component } from "react";
// import store from "../store";

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }.bind(this)}
//       ></AddNumber>
//     );
//   }
// }
