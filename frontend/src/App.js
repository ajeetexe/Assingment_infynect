import { Fragment, useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  let index = 1;
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      fetch("http://127.0.0.1:8000/api/student")
        .then((item) => item.json())
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }
    return () => {
      isMount = false;
    };
  }, [show]);
  async function onPostHandler(inputData) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      if (response.status === 400) {
        throw new Error("There is error");
      }
      if (response.ok) {
        setShow(false);
        setError(false);
      }
    } catch (err) {
      setError(true);
    }
  }

  Object.values(error).map((value, index) => console.log(value));
  return (
    <Fragment>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <h1 className="text-center text-info text-uppercase">
          Infynect Assingment
        </h1>
      </div>
      <div className="container">
        <div className="my-3">
          {!show && (
            <button
              onClick={() => setShow(true)}
              className="btn btn-primary p-2"
            >
              Add New Student
            </button>
          )}
          {error ? (
            <div className="alert alert-warning" role="alert">
              There must be some error, please recheck the forms and fill all.
            </div>
          ) : (
            ""
          )}
          {show && <AddStudent onPost={onPostHandler} />}
        </div>
        <div className="shadow-none p-3 mb-5 bg-secondary rounded">
          <h5 className="text-center text-white text-uppercase">
            Student records List
          </h5>
        </div>
        {data.length === 0 ? (
          <h1 className="text-center">No data found...</h1>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <th scope="row">{index++}</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.address}</td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>

      <footer></footer>
    </Fragment>
  );
}

export default App;
