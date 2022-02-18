# uniswap-clone

Building the Uniswap Blockchain Web 3.0 App using Solidity, Next JS, Sanity.io, Tailwind CSS, and Vercel. Credits to https://github.com/CleverProgrammers

Tutorial just had a simple SC and covered more about the integration of metamask and the use of React Context. A really fast tutorial overall that skimmed through the explanation of some parameters. Ended up not really building a uniswap 'swap' function, there is not swapping involved but just merely sending of ETH from one account to another. Also it is using the wrong practise for private keys which breaks my heart :(

Nonetheless, Completed Dapp and deployed via vercel to: https://uniswap-blockchain-clone-ruby.vercel.app/

Project is broken down into 3 folders

client--contains the frontend repo

smart_contract--contains the blockchain module that has the SC responsible for processing transactions

studio--sanity client that acts as a database so that data retrieval for transaction history is faster

### Local deployment

clone the repo, go to `studio`

```bash
sanity start
```

go to `client`

```bash
npm run dev
```

then you can view your app on localhost:3000. Take note of some configurations in `lib` folder under `client`
