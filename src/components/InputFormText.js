import React from "react";

const InputFormText = () => {
  return (
    <div>
      <div style={style.InputWrapper}>
        <h1 style={style.InputFormTitle}>あなたの今日の大事なご予定は？</h1>
        <div style={style.InputAria}>
          <form style={style.FormArea}>
            <input style={style.InputBox} type="text" />
          </form>
          <button type="submit" className="btn">
            送信
          </button>
        </div>
      </div>
    </div>
  );
};
const style = {
  InputWrapper: {
    width: "80%",
    margin: "50px auto",
  },
  InputFormTitle: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
  },
  InputAria: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  FormArea: {
    width: "80%",
    margin: "10px auto",
  },
  InputBox: {
    width: "100%",
    height: "50px",
    marginRight: "30px",
    border: "1px solid #333",
  },
};

export default InputFormText;
