import { Link } from "react-router-dom";
export function Navbar(props) {
  return (
    <div className="">
      <div className="flex w-full h-18 items-center gap-8 bg-black text-white px-8 py-3 shadow-lg">
        <Link to="/" className={props.home}>Home</Link>
        <Link to="/about" className={props.about}>About</Link>
        <Link to="/contact" className={props.contact}>Contact</Link>
      </div>
    </div>
  );
}