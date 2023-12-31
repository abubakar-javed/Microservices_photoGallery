import React from "react";
import styles from "./ImagesHero.module.css";

import { ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Chart.register(ArcElement);

const doughnutOptions = {
  plugins: {
    legend: {
      labels: {
        color: "white", // Set text color here
      },
    },
  },
};

const ImagesHero = ({ storage, bandwidth }) => {
  const formattedStorage = (storage / 1000).toFixed(2);
  const formattedBandwidth = (bandwidth / 1000).toFixed(2);

  const storageData = {
    labels: ["Used Storage (MB)", "Remaining Storage (MB)"],
    datasets: [
      {
        data: [10 - formattedStorage, formattedStorage],
        backgroundColor: ["#E0E0E0", "#FFCE56"],
      },
    ],
  };

  const bandwidthData = {
    labels: ["Used Bandwidth (MB)", "Remaining Bandwidth (MB)"],
    datasets: [
      {
        data: [25 - formattedBandwidth, formattedBandwidth],
        backgroundColor: ["#E0E0E0", "#36A2EB"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to our Image Gallery</h1>
        <p className={styles.description}>
          Unlock memories, store freely. Your visual time capsule - where images
          linger and stories await. Limited storage, unlimited tales. Share the
          secret with friends.
        </p>
        <p className={styles.description}>
          Total Storage: 10 Mb
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Remaining Storage: {formattedStorage} Mb
        </p>
        <p className={styles.description}>
          Total Daily Bandwith: 25 Mb &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Remaining Bandwith: {formattedBandwidth} Mb
        </p>
      </div>

      <div className={styles.imageContainer}>
        {/* <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/home.jpg`}
          alt=""
        /> */}
    
        <Doughnut data={storageData} options={doughnutOptions}  />
        <Doughnut data={bandwidthData} options={doughnutOptions} />
      </div>
    </div>
  );
};

export default ImagesHero;
