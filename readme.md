About Anti Forgery Prototype Using blockchain

A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp and transaction data. By design, a blockchain is inherently resistant to modification of the data.

In this prototype we use blockchain to support the anti forgery of the transaction that has been made in the prototype. The transaction is recorded in the database and the hashes and the id’s are recorded in the blockchain. When validating , blockchain will be the one that will request the data in the postgres and it will validate the file if it is tampared or removed.

Set up
1. Install Geth
2. Install Ethereum Wallet
3. Install Postgres SQL
4. Install PGAdmin
5. Install Visual Studio 2017
5. Set up Private_net 
6. Deploy Contract from contract.sol
7. In PGADmin Run Query from database.sql 
8. Change the ContractAddress , PostgresConnection and the Filepath in Web.Config
9. Run the Project in Visual Studio 2017


