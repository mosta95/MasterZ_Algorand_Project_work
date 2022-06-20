/*global AlgoSigner*/
import React, { useRef } from "react";
import ConnectAlgoSigner from "./ConnectAlgoSigner";
import SignPayTransaction from "./SignPayTransaction";
import algoSignerlogo from "../../assets/images/algosigner.jpeg";
import { AlgoSignerMain } from "./AlgoSigner.styles";
import CreateAsset from "./CreateAsset";
import AssetOptin from "./AssetOptin";
import { Main, MainBody } from "../../Main.styles";
import {useLocation} from "react-router-dom";
import History from "./History";


const AlgoSignerFund = () => {
  const userAccount = useRef();
  const receipient  = useRef();
  const amount = useRef();
 
  

  return (
    <div className="fund">
      <MainBody>
        <AlgoSignerMain>
          <Main>
            <img src={algoSignerlogo} alt="AlgoSigner Logo" height="70px" />
            <ConnectAlgoSigner userAccount={userAccount} />
            <SignPayTransaction
              userAccount={userAccount}
              amount={amount}
              receipient={receipient}
            />
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <History />
            {/* <CreateAsset userAccount={userAccount} />
            <AssetOptin userAccount={userAccount} /> */}
          </Main>
        </AlgoSignerMain>
      </MainBody>
    </div>
  );
};

export default AlgoSignerFund;
