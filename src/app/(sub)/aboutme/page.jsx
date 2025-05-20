import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faReact } from "@fortawesome/free-brands-svg-icons";

export default function Aboutme() {
  return (
    <div>
      <div className="inner">
        <div className="con-list-w">
          <div className="con-list">
            <div className="cont-tit">
              <p className="tit">Skills</p>
            </div>
            <div className="cont-wrap">
              <div className="skill-icon-list-w">
                <div className="skill-icon-list">
                  <FontAwesomeIcon icon={faHtml5} />
                </div>
                <div className="skill-icon-list">
                  <FontAwesomeIcon icon={faCss3} />
                </div>
                <div className="skill-icon-list">
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ color: "#61DAFB" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
