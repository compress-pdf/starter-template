"use client";
import SectionContainer from "@/components/common/containers/SectionContainer";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";

export default function HomePage() {
  // const { count } = useSelector((store: RootState) => store.counter.counter);
  return (
    <SectionContainer className="bg-blue-200 dark:bg-slate-800 py-10 text-center">
      <h1>Content Container</h1>

      <p className="font-medium text-center text-base hidden xl:block">
        (Large Desktop)
      </p>
      <p className="font-medium text-center text-base hidden lg:block xl:hidden">
        (Desktop)
      </p>
      <p className="font-medium text-center text-base hidden md:block lg:hidden">
        (Tablet)
      </p>
      <p className="font-medium text-center text-base block md:hidden">
        (Mobile)
      </p>
    </SectionContainer>
  );
}
