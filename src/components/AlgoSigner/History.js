import "./History.css"; //STILL IN PROGRESS TO GET TRANSACTIONS LIST

import { useState, useEffect, useId } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";


function History() {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  // const UpdateFundersList = async () => {
  //   setIsLoading(true);

  //   try {
  //     /* function to get all tasks from firestore in realtime */
  //       useEffect(() => {
  //         const taskColRef = query(
  //           collection(db, "campaigns"),
  //           orderBy("created", "desc")
  //         );
  //         onSnapshot(taskColRef, (snapshot) => {
  //           setTasks(
  //             snapshot.docs.map((doc) => ({
  //               id: doc.id,
  //               data: doc.data(),
  //             }))
  //           );
  //         });
  //       }, []);

    

     
  //     setData();
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  console.log(data);

  return (
    <div className="taskManager__container ">
      {isLoading && <h2>Loading...</h2>}
      <button >Load Transactions (in progress)</button>

      {data.data.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.email}</h2>
            <h2>{person.first_name}</h2>
            <h2>{person.last_name}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default History;
