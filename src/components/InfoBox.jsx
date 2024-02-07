import React from "react";
import tw from "twin.macro";
import { InfoBloxData } from "@/utils/InfoBlox";


function InfoBox() {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {InfoBloxData.map((data, i) => (
          <div key={i} style={styles.box}>
            <span style={styles.icon}>{data.icon}</span>
            <div style={styles.rightBox} key={i}>
              <h2 style={styles.title}>{data.title}</h2>
              <p style={styles.description}>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoBox;

const styles = {
  icon: tw``,
  box: tw`flex flex-row items-center gap-5`,
  rightBox: tw` flex flex-col items-start text-start gap-[2px] `,
  title: tw`font-Poppins font-[600] text-[25px] `,
  description: tw`font-[500] font-Poppins text-[20px] text-[#898989]  `,
  container: tw`flex items-start justify-start  m-auto w-full `,
  innerContainer: tw`flex flex-wrap justify-center gap-10  m-auto py-20`,
};
