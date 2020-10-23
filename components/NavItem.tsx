import Link from "next/link"

export default function NavItem(props) {
  return (
    <Link href={props.href}>
      <div
        onClick={props.handleOnClick}
        key={props.id}
        className={props.classNameTailwind}
      >
        <div className="no-select shadowClass cursor-pointer flex justify-center w-full border-4 border-cO-999 rounded-full py-2 px-4 transition duration-500 ease-in-out transform hover:scale-110 hover:bg-cB-800">
          <h4 className="overflow-x-hidden truncate text-cO-900 jost">
            {props.text}
          </h4>
        </div>
      </div>
    </Link>
  );
}