import Image from 'next/image';

export const SideAd = () => {
  return (
    <div
      className={`hidden lg:flex lg:w-[340px] lg:min-w-[340px] min-h-[800px] overflow-x-clip z-40 bg-green-500 opacity-20 flex-col px-[2px] `}
    >
      <div className="sticky top-[88px] w-[336px] h-[280px] ">
        <Image
          alt="xyz"
          className="w-[336px] h-[280px]"
          width={336}
          height={280}
          src={'https://placehold.jp/336x280.png'}
          // unoptimized={true}
          priority
        />
      </div>
      <div className="sticky top-[calc(88px+280px+12px)] w-[336px] h-[280px]">
        <Image
          alt="xyz"
          // className="hidden"
          className="w-[336px] h-[280px]"
          width={336}
          height={280}
          src={'https://placehold.jp/336x280.png'}
          // unoptimized={true}
          priority
        />
      </div>
    </div>
  );
};
