import "./header.css";
import {
  BsArrow90DegLeft,
  BsArrowBarLeft,
  BsArrowLeft,
  BsBell,
  BsQuestionCircle,
} from "react-icons/bs";
import { useNavigate } from "react-router";


export default function Header() {
  const history = useNavigate();
  return (
    <header className="header">
      <div className="header-info">
        <div className="left-arrow">
          <BsArrowLeft />
        </div>
        <div className="header-inter">
          <h2>Add Candidate</h2>
        </div>
      </div>
      <div className="user-info">
        <div className="question">
          <BsQuestionCircle />
        </div>
        <div className="bell">
          <BsBell />
        </div>
        <div className="user">
          <p className="User-name">Jaykr</p>
          <p className="company-name">Hire++ admin</p>
        </div>
      </div>
    </header>
  );
}
