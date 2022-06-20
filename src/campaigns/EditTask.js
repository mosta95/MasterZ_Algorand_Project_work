import Modal from "./Modal";
import { useState } from "react";
import "./editTask.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function EditTask({
  open,
  onClose,
  toEditTitle,
  toEditDescription,
  toEditAmount,
  toEditAddress,
  id
}) {
  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)
  const [amount, setAmount] = useState(toEditAmount)
  const [address, setAddress] = useState(toEditAddress)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "campaigns", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        amount: amount,
        address: address,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable="Edit Task" onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className="editTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
        />
        <input
          type="text"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Enter amount"
        />
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Enter address"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTask;
