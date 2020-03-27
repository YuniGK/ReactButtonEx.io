import React from "react";
import classNames from "classnames"; //터미널에서 yarn add classnames 설치 후, 사용을 이해 import한다.

import "./Button.scss";

/*
function Button({ children, size = 'medium'}) {
function Button({ children, size || 'medium'}) {

    Button.defaultProps = {
    size: "medium"
    };

    또는 function 아래에서 위와 같이 설정해준다.
    위의 defaultProps 설정이 가장 정석적인 설정이다.
*/

// 버튼 속성 외 다른 이벤트마다 등록 않고 ...rest 로 작성하여 이벤트를 가지고 온다.
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  /* 
    return <button className={["Button", size.join(" ")]}>{children}</button>;
    return <button className={`Button ${size}`}>{children}</button>;
  */

  //size : large, medium, small
  //color : blue, pink, gray
  //outine, fullWith = boolean

  console.log(rest);

  return (
    <button
      className={classNames(
        "Button",
        size,
        color,
        { outline, fullWidth },
        className // 버튼에 클래스 내임을 설정해 커스터 마이징이 가능하게 한다.
      )}
      {...rest} //rest 객체안의 설정을 버튼안에 설정해준다.
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;
