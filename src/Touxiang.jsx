import "./touxiang.css";
import { message } from "antd";
function Touxiang() {
  return (
    <>
      <div
        className="touxiang"
        onClick={() => {
          message.info("hello");
        }}
      >
        Touxiang 111111
      </div>
      <div>Touxiang 111111</div>
      <div>Touxiang 111111</div>
      <div>Touxiang 111111</div>
    </>
  );
}

export default Touxiang;
