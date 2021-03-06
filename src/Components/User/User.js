import React from "react";
import { Redirect } from "react-router-dom";
import "../../assets/css/User.css";
import { UserLogin, UserSignUp } from "./";


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const {isLoggedin} = this.props;
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";

    if(isLoggedin){
      console.log("This is rendered")
       return <Redirect to="/"/>
    }
    return (
      <div className="User">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <UserLogin containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <UserSignUp containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
    console.log("IN RIght Side")
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
          <div className="text">User</div>
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default User;