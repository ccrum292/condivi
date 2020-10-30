import { useRef, useContext, useEffect } from "react";
import userAndNavContext from "../context/userAndNavContext";

export default function ZenModeToggler({ focusRef }) {
  const toggleRef = useRef(null);
  const { isZenMode, setIsZenMode } = useContext(userAndNavContext);

  const exitHandler = () => {
    if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement === null) {
      console.log("enter")
    } else {
      console.log("exit")
      setIsZenMode(false);
      toggleRef.current.checked = false;
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);

    return () => {
      document.removeEventListener('fullscreenchange', exitHandler, false);
      document.removeEventListener('mozfullscreenchange', exitHandler, false);
      document.removeEventListener('MSFullscreenChange', exitHandler, false);
      document.removeEventListener('webkitfullscreenchange', exitHandler, false);
    };
  }, [])


  const handleZenModeToggle = e => {

    if (isZenMode) document.exitFullscreen()
    else focusRef.current.requestFullscreen()

    setIsZenMode(!isZenMode)
  }

  return (
    <label className="switch">
      <input ref={toggleRef} type="checkbox" />
      <span onClick={e => handleZenModeToggle(e)} className="slider round"></span>
    </label>
  )
}