import { Button, Grid } from "@mui/material";
import styles from "./style.module.css";
import { imageList } from "./data";
import { imageListType } from "./types";
import Image from "next/image";
import Slider from "react-slick";

const HomeProductsList = () => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-[aliceblue] h-auto mt-14 ${styles.container}`}
    >
      <div className={styles.boxContainer}>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-3 justify-center items-center">
          {imageList.map((item: imageListType, index: number) => (
                <Image
                  key={index}
                  src={item.imageUrl}
                  alt={`Image ${item.id}`}
                  className={` col-span-1 ${styles.image}`}
                  title={`Image ${item.id}`}
                  width={372}
                  height={372}
                />
          ))}
        </div>
      </div>

      <Button
        variant="outlined"
        color="primary"
        className=" font-lato text-lg mt-16  leading-[77px] rounded-md  w-40 h-[50px]"
        href="products"
      >
        Voir tout
      </Button>
    </div>
  );
};
export default HomeProductsList;
