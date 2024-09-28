# ToDoList DApp on Aptos

## Project Vision
The **ToDoList DApp** is a decentralized task management application built on the **Aptos blockchain**. Users can create, update, and delete tasks securely using **Move smart contracts**, ensuring immutability and transparency. The **React** frontend provides a user-friendly interface, while the **Petra wallet** facilitates user authentication and transaction signing.

## Features
- **Decentralized Task Management**: Tasks are securely stored on the blockchain.
- **React Frontend**: Modern, responsive interface for managing tasks.
- **Aptos Move Smart Contracts**: Secure task handling using the Aptos Move language.
- **Petra Wallet Integration**: Petra wallet provides seamless user authentication and transaction signing.

## Tech Stack
- **Frontend**: React.js
- **Blockchain**: Aptos (Move Language)
- **Wallet**: Petra Wallet

## How It Works
1. **Add a Task**: Users can add tasks through the frontend.
2. **Store on Blockchain**: The task is stored securely via an Aptos Move smart contract.
3. **Update/Delete Task**: Modify or remove tasks directly on the blockchain.
4. **Petra Wallet**: Use Petra Wallet to sign and confirm blockchain transactions.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Aptos CLI](https://aptos.dev/cli-tools/aptos-cli-tool/)
- [Petra Wallet](https://petra.app/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aptos-todolist.git
   cd aptos-todolist
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up the Aptos environment:
   - Install Aptos CLI:  
     ```bash
     curl -sSf https://aptos.dev/cli-tools/install | sh
     ```
   - Create an Aptos account:
     ```bash
     aptos init
     ```
   - Fund the account using the Aptos faucet (Devnet):
     ```bash
     aptos account fund-with-faucet --account your_account_address
     ```

4. Deploy the Move smart contract:
   - Navigate to the `move` folder in your project.
   - Build and deploy the contract:
     ```bash
     aptos move compile
     aptos move publish --profile devnet
     ```

5. Run the React frontend:
   ```bash
   npm start
   ```

6. Ensure **Petra Wallet** is installed and connected to interact with the DApp.

### Deployment

1. **Deploy on Aptos Devnet/Testnet**:
   - **Build the Move contract**:
     ```bash
     aptos move compile
     ```
   - **Deploy the contract**:
     ```bash
     aptos move publish --profile devnet
     ```
   - The contract will be deployed on Aptos Devnet/Testnet. Make sure to copy the contract address for frontend integration.
   
2. **Frontend Deployment**:
   - Deploy the React app using any preferred service (e.g., Netlify, Vercel).
   - Update the contract address and Aptos network configurations in the frontend code.

### Usage
- Go to the frontend URL (e.g., `http://localhost:3000` or deployed link).
- Connect your **Petra Wallet**.
- Create, update, or delete tasks, and watch them be securely stored on the Aptos blockchain.

## Aptos CLI Commands
- **Check account balance**:
  ```bash
  aptos account balance --profile devnet
  ```
- **Deploy Move contract**:
  ```bash
  aptos move publish --profile devnet
  ```
- **Fund account with Devnet faucet**:
  ```bash
  aptos account fund-with-faucet --account your_account_address
  ```

## Deployment Information
- **Smart Contract Address**: `https://explorer.aptoslabs.com/txn/0x5f50e8e05d96a403354d1f04c3a3e637fc4bdcca2fca098461d600fab844dc55?network=devnet`
- **Transaction**: 0x5f50e8e05d96a403354d1f04c3a3e637fc4bdcca2fca098461d600fab844dc55
- **Aptos Devnet URL**: `https://fullnode.devnet.aptoslabs.com`

- ![image](https://github.com/user-attachments/assets/829a9027-918f-41dd-ab5c-d0cb0b67b609)


## Contact Information
For inquiries or support, feel free to reach out:

- **Name**: Aman Shukla
- **Email**: aman.shukla.4194@gmail.com
- **LinkedIn**: `https://www.linkedin.com/in/aman-shukla-16b8501b9/`
- **GitHub**: `https://github.com/AmanShukla4194`

## Future Scope
The ToDoList DApp can be expanded and enhanced in the following ways:
1. **Task Prioritization**: Categorize tasks as High, Medium, or Low priority to help users focus on urgent tasks.
2. **Reminders and Notifications**: Integrate reminders for deadlines or overdue tasks, with notifications for better task management.
3. **Collaborative Task Management**: Allow multiple users to share, collaborate, and manage tasks together.
4. **Mobile App Integration**: Build a mobile version of the DApp for increased accessibility on-the-go.
5. **Cross-chain Interoperability**: Expand the DApp to support other blockchain networks for a broader user base.
6. **Task Analytics**: Provide users with insights into task completion trends, productivity statistics, and more.
7. **Enhanced Security**: Implement advanced security features, such as multi-signature transactions for task updates or deletions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can adjust the links and contact details as needed before posting on GitHub! Let me know if you need any further refinements.
