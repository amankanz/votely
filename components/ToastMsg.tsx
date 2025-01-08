import React from "react";

interface ToastMsgProps {
  msg: string;
  styles: string;
}

function ToastMsg({ msg, styles }: ToastMsgProps) {
  return (
    <div className={`${styles} top-[6.5rem] end-3 transition-all duration-300`}>
      <div>
        <div className="alert alert-success">
          <span className="text-white">{msg}</span>
        </div>
      </div>
    </div>
  );
}

export default ToastMsg;
