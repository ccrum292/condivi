import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function ProcessingCircleNotch() {

  return (
    <FontAwesomeIcon
      style={{ color: "#cb9356" }}
      size="10x"
      icon={faCircleNotch}
      className="animate-spin"
    />
  )
}