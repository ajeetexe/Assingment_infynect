import { useState } from "react";
const AddStudent = (props) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    department: "",
    email: "",
    mobile: "",
    address: "",
  });
  const onChangeHandler = (e) => {
    setInputValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onAddStudent = () => {
    props.onPost(inputValue);
  };

  return (
    <div className="p-5" style={{"background":"whitesmoke"}}>
      <div className="mb-3">
        <label className="form-label" id="name">
          Name
        </label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" id="department">
          Department
        </label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="text"
          id="department"
          name="department"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" id="email">
          Email
        </label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" id="mobile">
          Mobile
        </label>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="tel"
          id="mobile"
          name="mobile"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" id="address">
          Address
        </label>
        <textarea
          onChange={onChangeHandler}
          className="form-control"
          id="address"
          name="address"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <button onClick={onAddStudent} className="btn btn-primary py-2 px-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
