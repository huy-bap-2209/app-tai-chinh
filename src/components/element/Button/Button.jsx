import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  to,
  href,
  onClick,
  className,
  defaultBtn = false,
  btnLink = false,
  btnOutline = false,
  btnRadius,
  ...rest
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...rest,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("btn-navigate", className, { defaultBtn, btnLink, btnRadius, btnOutline });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
