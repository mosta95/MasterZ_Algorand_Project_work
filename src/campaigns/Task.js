import "./task.css";
import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate, Link } from "react-router-dom";


function Task({ id, title, description, amount, address, campaign_id, completed }) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, "campaigns", id);
    try {
      await updateDoc(taskDocRef, {
        completed: checked,
      });
    } catch (err) {
      alert(err);
    }
  };

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(db, "campaigns", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
  

  

  return (
    <div className={`task ${checked && "task--borderColor"}`}>
      <div>
        <input
          id={`checkbox-${id}`}
          className="checkbox-custom"
          name="checkbox"
          checked={checked}
          onChange={handleChange}
          type="checkbox"
        />
        <label
          htmlFor={`checkbox-${id}`}
          className="checkbox-custom-label"
          onClick={() => setChecked(!checked)}
        ></label>
      </div>
      <div className="task__body">
        <h2>{title}</h2>
        <p>{amount}</p>

        {/* <button id="button1" onclick={copyToClipboard("div1")}>
          Click to copy
        </button> */}
        <div>{address}</div>
        <p>{description}</p>
        <div className="task__buttons">
          <div className="task__deleteNedit">
            <button
              className="task__editButton"
              onClick={() => setOpen({ ...open, edit: true })}
            >
              Edit
            </button>
            <button className="task__deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <button onClick={() => setOpen({ ...open, view: true })}>View</button>
          <Link to={{ pathname: "/fund", state: { address } }}>
            <button>Fund</button>
          </Link>
        </div>
      </div>

      {open.view && (
        <TaskItem
          onClose={handleClose}
          title={title}
          amount={amount}
          address={address}
          description={description}
          campaign_id={campaign_id}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={title}
          amount={amount}
          toEditDescription={description}
          open={open.edit}
     
        />
      )}
    </div>
  );
}


export default Task;
