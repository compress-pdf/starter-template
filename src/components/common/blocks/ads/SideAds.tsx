import Image from 'next/image';

export const SideAd = ({
  position = 'left',
}: {
  position: 'left' | 'right';
}) => {
  return (
    <div
      className={`hidden xl:flex min-h-[800px] overflow-x-clip bg-yellow-50 dark:bg-slate-700 ${
        position === 'right' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div className="sticky top-[88px] min-w-[320px] h-[800px]">
        <Image
          alt="xyz"
          width={300}
          height={640}
          src={'https://placehold.jp/300x640.png'}
          unoptimized={true}
          priority
        />
      </div>
    </div>
  );
};
