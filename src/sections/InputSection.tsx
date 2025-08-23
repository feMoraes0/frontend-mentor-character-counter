type Event = {
  target: {
    value: string;
  };
};

const InputSection = () => {
  function handleTextInput(event: Event) {
    console.log(event.target.value);
  }

  return (
    <section className="mt-10 px-4 flex flex-col justify-start items-start lg:mt-12">
      <textarea
        onChange={handleTextInput}
        name="text-input"
        className="
          p-3 mb-4 rounded-[12px] border-2 border-[#E4E4EF] bg-[#F2F2F7] w-full min-h-[200px] resize-none
          dark:bg-[#21222C] dark:border-[#2A2B37]
          placeholder:text-[#2A2B37] placeholder:text-[20px] placeholder:leading-[140%] placeholder:tracking-[-0.6px]
          dark:placeholder:text-[#E4E4EF]
          text-[20px] leading-[140%] tracking-[-0.6px] text-[#2A2B37]
          dark:text-[#E4E4EF]
        "
        placeholder="Start typing here… (or paste your text)"
      />
      <div className="md:flex md:flex-row md:justify-between md:w-full">
        <fieldset className="flex flex-col gap-3 mb-3 md:flex-row md:gap-6">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <input type="checkbox" name="exclude" className="h-4 w-4" />
            <label
              htmlFor="exclude"
              className="capitalize text-[16px] leading-[130%] tracking-[-0.6px] text-[#12131A] dark:text-[#E4E4EF]"
            >
              Exclude spaces
            </label>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <input type="checkbox" name="limit" className="h-4 w-4" />
            <label
              htmlFor="limit"
              className="capitalize text-[16px] leading-[130%] tracking-[-0.6px] text-[#12131A] dark:text-[#E4E4EF]"
            >
              Set Character limit
            </label>
          </div>
        </fieldset>
        <p className="text-[16px] leading-[130%] tracking-[-0.6px] text-[#12141A] dark:text-[#E4E4EF]">
          Approx. reading time: 1 minute
        </p>
      </div>
    </section>
  );
};

export default InputSection;
