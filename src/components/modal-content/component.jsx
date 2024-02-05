import classNames from "classnames";
import styles from "./styles.module.scss";
import { LoginForm } from '../login-form/component';

export function ModalContent({ onClose })  {
  return (
    <div className={classNames(
      styles['modal']
    )
    } >
      <LoginForm/>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
