import { Adapter, WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { BitKeepWalletAdapter } from '@solana/wallet-adapter-bitkeep';
import { BitpieWalletAdapter } from '@solana/wallet-adapter-bitpie';
import { BloctoWalletAdapter } from '@solana/wallet-adapter-blocto';
import { CloverWalletAdapter } from '@solana/wallet-adapter-clover';
import { Coin98WalletAdapter } from '@solana/wallet-adapter-coin98';
import { CoinhubWalletAdapter } from '@solana/wallet-adapter-coinhub';
import { LedgerWalletAdapter } from '@solana/wallet-adapter-ledger';
import { MathWalletAdapter } from '@solana/wallet-adapter-mathwallet';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SafePalWalletAdapter } from '@solana/wallet-adapter-safepal';
import { SlopeWalletAdapter } from '@solana/wallet-adapter-slope';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import {
    SolflareWebWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
} from '@solana/wallet-adapter-sollet';
import { SolongWalletAdapter } from '@solana/wallet-adapter-solong';
import { TokenPocketWalletAdapter } from '@solana/wallet-adapter-tokenpocket';
import { TorusWalletAdapter } from '@solana/wallet-adapter-torus';

export interface WalletsConfig {
    network?: WalletAdapterNetwork;
}

export function getWalletAdapters({ network = WalletAdapterNetwork.Mainnet }: WalletsConfig = {}): Adapter[] {
    return [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter(),
        new SolletExtensionWalletAdapter({ network }),
        new BitKeepWalletAdapter(),
        new BitpieWalletAdapter(),
        new CloverWalletAdapter(),
        new Coin98WalletAdapter(),
        new CoinhubWalletAdapter(),
        new MathWalletAdapter(),
        new SafePalWalletAdapter(),
        new SolongWalletAdapter(),
        new TokenPocketWalletAdapter(),
        new TorusWalletAdapter({ params: { showTorusButton: false } }),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolflareWebWalletAdapter({ network }),
        new BloctoWalletAdapter({ network }),
    ];
}
