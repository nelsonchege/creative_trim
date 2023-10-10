import Header from "@/components/Header";
import Messaging from "@/components/Messaging";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Messaging/>
      <div>section 4</div>
      <div>section 5</div>
      <div>section 6</div>
      <div>section 7</div>
    </>
  );
}
