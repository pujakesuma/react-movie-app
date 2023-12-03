type Props = {
  text: string,
}

const Chips = ({ text }: Props) => {
  return (
    <div
      className="[word-wrap: break-word] my-[5px] mr-2 md:mr-4 flex h-[24px] md:h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[8px] md:px-[12px] py-0 text-xs md:text-lg font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] active:text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200"
    >
      {text}
    </div>
  )
}

export default Chips