import Head from "next/head";
import getConfig from 'next/config'
import styles from "../styles/Home.module.css";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <div>
      {process.browser
        ? publicRuntimeConfig.apiEndpoint
        : serverRuntimeConfig.apiEndpoint}
    </div>
  );
}
