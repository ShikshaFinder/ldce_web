import Image from "next/image";
import Carousel from "@/components/carousel";
import Announcement from "@/components/Announcement";
import AboutLdce from "@/components/AboutLdce";
import Events from "@/components/Events";
import LDCENumbers from "@/components/LDCENumbers";
import AcadmicUnit from "@/components/AcadmicUnit";
import Gallary from "@/components/Gallary";
import Achivements from "@/components/Achivements";
import News from "@/components/News";
import Placements from "@/components/placements";

export default function Home() {
  return (
   <>
   <Carousel />
   <Announcement />
    <AboutLdce />
    <Events />
    <LDCENumbers />
    <AcadmicUnit />
    <Gallary />
    <Achivements />
    <News />
    <Placements />
   </>
  );
}
