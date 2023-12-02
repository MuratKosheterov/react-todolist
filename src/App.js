import { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(e) {
    if (!inputItem) {
      alert('you are not entered yet...')
      
    } else {
      const item = {
        id: Math.floor(Math.random() * 10000),
        value: inputItem,
        status: false,
      };

      setItems((prev) => [...prev, item]);

      setInputItem("");
    }
  }

  function removeTodo(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function lined(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status: !item.status } : { ...item }
      )
    );
  }

  return (
    <div className="App mt-5  ">
      <div className="container w-50 bg-success-subtle  py-5">
        <div className="row">
          <div className="col-12 d-flex  flex-column    align-items-center ">
            <h1>React Todo list</h1>

            <div className="my-5">
              <input
                onChange={(e) => setInputItem(e.target.value)}
                value={inputItem}
                type="text"
                name=""
                id=""
              />
              <button
                onClick={() => addItem()}
                className="bg-warning border-0 "
              >
                Add to list
              </button>
            </div>

            <ul>
              {items.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" d-flex  w-100 justify-content-between  align-items-center  bg-light  rounded-pill  py-2 mb-3"
                  >
                    <input
                      onClick={() => lined(item.id)}
                      className="mx-5"
                      type="checkbox"
                      id=""
                    />
                    <p
                      style={
                        item.status
                          ? { textDecoration: "line-through" }
                          : { textdecoration: "" }
                      }
                      className="m-auto px-5"
                    >
                      {item.value}
                    </p>
                    <i
                      onClick={() => removeTodo(item.id)}
                      className="bi bi-trash3 mx-5"
                    ></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
