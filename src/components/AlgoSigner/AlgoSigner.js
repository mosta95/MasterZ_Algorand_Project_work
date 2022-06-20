/*global AlgoSigner*/
import React, { useRef } from "react";
import ConnectAlgoSigner from "./ConnectAlgoSigner";
import SignPayTransaction from "./SignPayTransaction";
import algoSignerlogo from "../../assets/images/algosigner.jpeg";
import { AlgoSignerMain } from "./AlgoSigner.styles";
import CreateAsset from "./CreateAsset";
import AssetOptin from "./AssetOptin";
import Dashboard from "../../Dashboard";
import { Main } from "../../Main.styles";
import TaskManager from "../../campaigns/TaskManager";

const AlgoSigner = () => {
  const userAccount = useRef();
  const receipient = useRef();
  const amount = useRef();
  

  return (
    <div className="algosigner">
      <AlgoSignerMain>
        <Dashboard />
        <TaskManager/>
        {/* <Main>
          <img src={algoSignerlogo} alt="AlgoSigner Logo" height="70px" />
          <ConnectAlgoSigner userAccount={userAccount} />
          <SignPayTransaction
            userAccount={userAccount}
            amount={amount}
            receipient={receipient}
          />
          <CreateAsset userAccount={userAccount} />
          <AssetOptin userAccount={userAccount} />
        </Main> */}
      </AlgoSignerMain>
    </div>
  );
};

export default AlgoSigner;
