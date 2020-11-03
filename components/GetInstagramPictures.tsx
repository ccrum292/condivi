import LgPillButton from "./LgPillButton";


export default function GetInstagramPictures(props) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center lg:w-8/12 lg:mx-auto">
      <LgPillButton text="View Instagram Pictures" key={1} handleOnClick={props.handleOnClick} />
    </div>

  )
}