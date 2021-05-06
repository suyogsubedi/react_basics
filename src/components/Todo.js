import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    console.log(title);
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {/* In Javascript while using && operator if both the values are true the second value gets returned */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {/* onCancel chai hamile backdrop.js bata forward gareko*/}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
