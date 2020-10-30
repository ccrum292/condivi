import ProcessingCircleNotch from "./ProcessingCircleNotch";

export default function FullViewProcessing() {

  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-full z-50 bg-gray-800 bg-opacity-90 flex justify-center items-center">
      <ProcessingCircleNotch />
    </div>
  )
}