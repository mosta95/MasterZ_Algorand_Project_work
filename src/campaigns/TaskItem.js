import Modal from "./Modal";
import "./taskItem.css";

function TaskItem({
  onClose,
  open,
  title,
  description,
  amount,
  address,
  campaign_id,
}) {
  return (
    <Modal modalLable="Campaign details" onClose={onClose} open={open}>
      <div className="taskItem">
        <h2>{title}</h2>
        <p>Amount requested: {amount}</p>
        <p>Address requester: </p>
        <p>{address}</p>
        <p>Description: {description}</p>
        <p>Campaign ID: {campaign_id}</p>
      </div>
    </Modal>
  );
}

export default TaskItem;
