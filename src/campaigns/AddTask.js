import Modal from "./Modal";
import { useState, useId } from "react";
import { default as UUID } from "node-uuid";
import "./addTask.css";
import { db } from "./firebase";
import { auth } from "../firebase";
import {
  collection,
  addDoc,
  Timestamp,
  pushedPostRef,
} from "firebase/firestore";
import { query, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function AddTask({ onClose, open }) {
  const [user, loading, error] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const[FundersList, setFundersList] = useState("")
  const [name, setName] = useState("");
  const campaign_id = UUID.v4();

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'campaigns'), {
        title: title,
        amount: amount,
        address: address,
        description: description,
        name: user.email,
        completed: false,
        created: Timestamp.now(),
        campaign_id: campaign_id,
        //FundersList: FundersList,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };


  return (
    <Modal modalLable="Add campaign" onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        <div>{user?.email}</div>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder="Enter title"
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
          placeholder="Enter campaign decription"
          value={description}
        ></textarea>

        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask;
