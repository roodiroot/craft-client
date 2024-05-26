import Container from "@/components/container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container className="mt-8">
      <div className="relative bg-primary p-4 sm:p-8 rounded-4xl h-[38rem]  overflow-hidden xl:h-[34rem]">
        <div className="max-w-3xl md:max-w-4xl xl:max-w-full">
          <h1 className="relative z-10 font-unbounded  leading-[100%] font-bold text-3xl md:text-[65px] xl:text-[94px]">
            Производство упаковки из гофрокартона
          </h1>
        </div>
        <Image
          alt="main_img"
          width={1000}
          height={1000}
          src="/images/hero/bg.png"
          className="absolute z-0 -bottom-[0rem] min-w-[563px] -right-[14rem] md:-bottom-[7rem] md:-right-[15rem] md:w-[53rem]"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
