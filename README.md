# BlockChain Technical test
Simple cryptocurrency price dashboard using Next.js that fetches real-time market data from the CoinGecko API (https://www.coingecko.com/en/api) and displays the price for a select list of cryptocurrencies.

## Getting Started

 ⚠️ Create a `.env.local` file and add your cion gecko api-key (for demo) at the root (`./` of the project):
```
COIN_GECKO_API_KEY="..."
```
If you want to try with pro api you should modify:
- getOptions() headers : `/src/api/cryptocurrencies/coinGecko/utils.ts`(l.17)
- `coinGeckoBaseUrl` in the `config.ts` file 

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Stack 
- Next.JS / React
- DaisyUI / Tailwind
- Typescript

## Decisions 
- A `src/features` for components related for a feature here for the 2 pages (Home and coins/[id]) are in the cryptocurrencies repository because are related to these feature. By that, the app repository should contains only pages with a few of components and not all the stuff
- `src/components` content all other components with sub repositories layout, ui, navigation...
- `src/api` is also split by feature and to abstract coin gecko api from the rest I decided to put it in a separate repository



## Reflexions / Trade-off (those are my tought unresolve for now)
- I have some verifications to handle errors but didn't add test for now the service can be test at least a case with everything all good and some others to see if servor error are handled properly (good crypto names...)
- should create `pages` like CoinDetailsPage and HomePage and import it in `app`
- Use Suspense instead of loading.tsx to granulate component that need to load data. 

<img width="917" height="461" alt="Capture d’écran 2026-02-06 à 11 44 36" src="https://github.com/user-attachments/assets/bd4b9438-124d-4e52-acd9-1f4d0ce995b5" />
<img width="400" height="856" alt="Capture d’écran 2026-02-06 à 13 01 31" src="https://github.com/user-attachments/assets/7c6ef2a2-de46-4dab-94dd-4c1a0ae8ef35" />
<img width="388" height="843" alt="Capture d’écran 2026-02-06 à 11 54 08" src="https://github.com/user-attachments/assets/d76ca282-e171-410b-91a0-c2cdebf3311d" />
<img width="1046" height="303" alt="Capture d’écran 2026-02-06 à 11 52 52" src="https://github.com/user-attachments/assets/94dfdd92-eadc-4ebc-9ed5-bb4707e7d6e9" />
<img width="1081" height="482" alt="Capture d’écran 2026-02-06 à 11 49 47" src="https://github.com/user-attachments/assets/eeb3441e-0b9d-4ed1-a7bd-6fc475407c52" />

