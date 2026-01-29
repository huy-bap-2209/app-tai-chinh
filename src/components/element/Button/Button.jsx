import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, to, href, onClick, ...rest }) {
  let Comp = "button";
  const props = {
    onClick,
    to,
    href,
    ...rest,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("btn-underline");

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
