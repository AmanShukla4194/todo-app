import { Layout, Row, Col, Button } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";

function App() {
  const aptosConfig = new AptosConfig({ network: Network.MAINNET });
  const aptos = new Aptos(aptosConfig);
  const { account, signAndSubmitTransaction } = useWallet();
  const [accountHasList, setAccountHasList] = useState<boolean>(false);
  // replace with your own address
  const moduleAddress =
    "4d046c0be428830a6abd1d75538ddbe5e9d4477e5bd64da79df264951e11b8fd";
  const transaction: InputTransactionData = {
    data: {
      function: `${moduleAddress}::todolist::create_list`,
      functionArguments: [],
    },
  };

  const [transactionInProgress, setTransactionInProgress] =
    useState<boolean>(false);

  const fetchList = async () => {
    if (!account) return [];
    // change this to be your module account address
    const moduleAddress =
      "0xcbddf398841353776903dbab2fdaefc54f181d07e114ae818b1a67af28d1b018";
    try {
      const todoListResource = await aptos.getAccountResource({
        accountAddress: account?.address,
        resourceType: `${moduleAddress}::todolist::TodoList`,
      });
      setAccountHasList(true);
    } catch (e: any) {
      setAccountHasList(false);
    }
  };

  const addNewList = async () => {
    if (!account) return [];
    setTransactionInProgress(true);
    const transaction: InputTransactionData = {
      data: {
        function: `${moduleAddress}::todolist::create_list`,
        functionArguments: [],
      },
    };
    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(transaction);
      // wait for transaction
      await aptos.waitForTransaction({ transactionHash: response.hash });
      setAccountHasList(true);
    } catch (error: any) {
      setAccountHasList(false);
    } finally {
      setTransactionInProgress(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [account?.address]);

  return (
    <>
      <Layout>
        <Row align="middle">
          <Col span={10} offset={2}>
            <h1>Our todolist</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>
      {!accountHasList && (
        <Row gutter={[0, 32]} style={{ marginTop: "2rem" }}>
          <Col span={8} offset={8}>
            <Button
              onClick={addNewList}
              block
              type="primary"
              style={{ height: "40px", backgroundColor: "#3f67ff" }}
            >
              Add new list
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
}

export default App;
export const aptos = new Aptos();
// change this to be your module account address
export const moduleAddress =
  "4d046c0be428830a6abd1d75538ddbe5e9d4477e5bd64da79df264951e11b8fd";
