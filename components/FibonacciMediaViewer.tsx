import { useRef, useEffect } from "react";

export default function FibonacciMediaViewer(props) {

  const mainFibDiv = useRef(null);

  // const resizeDiv = () => {
  //   console.log("resize")
  //   const positionOfMainFibDiv = mainFibDiv.current.getBoundingClientRect()
  //   mainFibDiv.current.style.height = `${positionOfMainFibDiv.width}px`
  // }

  useEffect(() => {
    // window.addEventListener('resize', resizeDiv);

    // return () => {
    //   window.removeEventListener('resize', resizeDiv);
    // }

  }, [])

  return (
    <div className="grid grid-cols-13 gap-1 w-full">
      <div className="col-span-8 bg-red-300">

      </div>
      <div className="col-span-5">
        <div className="grid grid-rows-8 h-full gap-1">
          <div className="row-span-5 bg-green-300">

          </div>
          <div className="row-span-3">
            <div className="grid grid-cols-5 gap-1 w-full h-full">
              <div className="col-span-2">
                <div className="grid grid-rows-3 h-full gap-1">
                  <div className="row-span-1">
                    <div className="grid grid-cols-2 h-full gap-1">
                      <div className="col-span-1 bg-teal-300">

                      </div>
                      <div className="col-span-1 bg-white">

                      </div>
                    </div>
                  </div>
                  <div className="row-span-2 bg-purple-300">

                  </div>
                </div>
              </div>
              <div className="col-span-3 bg-indigo-300">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}