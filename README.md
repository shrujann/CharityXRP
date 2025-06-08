# 🚀 DonateX

**DonateX** is a blockchain-powered donation platform that enables transparent, traceable crypto contributions to NGOs and social causes. Built on the XRPL, this platform ensures donor trust by making every transaction publicly verifiable.

Donors can contribute using popular cryptocurrencies **(XRP, ETH, BTC)** and view the dispersion of funds through the official XRPL Ledger. NGOs can showcase real-world impact by anchoring event milestones and project updates on-chain. **DonateX** is designed for scalability, experimentation, and ease of use—ideal for  future social impact applications.

Built during the XRPL Hackathon in 24 hours, this MVP aims to demonstrate how decentralised tech can solve real-world problems in the nonprofit space.

# 🎯 Full Description

For this project, we utilized the XRP Ledger to generate two wallets (which will act as two seperate users), by using the file **generate.js**, this allows us to obtain the seed info and wallet address of the two users. 

User A -> Simulates a general user utilizing our application to **donate funds**
User B -> Simulates an NGO or other organisation utilizing our application to **recieve donations**

Once we obtained information to simulate, we leveraged on the fact that each wallet can trade with each other once a trustline has been established with a specific token. In this case, we established the trustline between both wallets to the RLUSD, which then allows for Peer to Peer transactions between User A and User B.

We decided to use **RLUSD** as the token in this case, as it is a stablecoin and better fits with our use case, as organisations can easily convert the stablecoin in any country they are providing humanitarian aid in. 

As P2P transactions can now be accepted between user A and user B, it is now possible for user A to donate to the NGO organisation through our website, which will be the main interface for any interactions between the user and the NGO. 

Our user friendly website can then be used as a platform for donors to pick which humanitarian project they would like to support, and they can easily donate to them with a click of a button - they will then be prompted to enter the amount they would like to transfer in RLUSD, and to enter their personal information. 

They will then be directed to a confirmation screen, which will show the wallet address of the NGO so that they know exactly which wallet address are the funds being sent to. They will also be asked if they want to receieve email updates for when the funds begin to move from this address, so that they can monitor how the money is being used by the NGO, with a block explorer link for transactions on the XRP Ledger testnet. 

NGOs can utilise these funds in their humanitarian efforts and allow for donors to view exactly where the funds are going to build more trust between each other. When NGOs host events such as a food donation drive, real time updates can be presented on the blockchain.

# 🛠️ Technical Description

The following below are the SDKs and tools used in designing this application.

| SDK / Tool  | Purpose                                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **React**   | Core frontend framework used for building the UI. Lightweight and component-based for scalable development.                                    |
| **Vite**    | Fast and modern frontend bundler used with React to enable lightning-fast hot reloads and optimized builds.                                    |
| **Next.js** | Used for server-side rendering and API routes, providing better SEO and performance for dynamic content.                                       |
| **xrpl**    | Official JavaScript SDK to interact with the XRP Ledger – includes features like wallet generation, transactions, and querying ledger data.    |
| **dotenv**  | Used to securely manage environment variables such as XRPL seeds, secret keys, and API endpoints. Keeps sensitive data out of version control. |

# 🔗 Live Demo
[Watch the video](https://vimeo.com/1091520522?share=copy)

# 💻 Installation

Prequisities:
- Node.js (v22.16.0)
- npm (v10.9.2)
- Browser

Steps:

1. **Clone the Repository**
```
git clone https://github.com/your-username/CharityXRP.git
cd CharityXRP
```

2. **Install Dependencies**
```
npm install
```

If hvaing issues with dependencies, you can do them manually with:

```
npm install express cors
npm install xrpl
```

3. **Running the backend server**

```
node server.js 
```

This command should be run within the "CharityXRP" Folder on the terminal.

4. **Accessing the frontend**
Open http://localhost:3000/ in your browser to view the site.







