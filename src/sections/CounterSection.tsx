import CounterWordShape from '../assets/images/counter-word-shape.png';
import CounterCharacterShape from '../assets/images/counter-character-shape.png';
import CounterSentenceShape from '../assets/images/counter-sentence-shape.png';

const CounterSection = () => {
  const characterCount = 274;
  const wordCount = 39;
  const sentenceCount = 4;

  function formatCounter(counter: number) {
    return String(counter).padStart(2, '0');
  }

  return (
    <section className="mt-10 flex flex-col justify-start items-stretch px-4 gap-4">
      <article className="bg-[#D3A0FA] rounded-[12px] p-5 flex flex-col gap-2 relative">
        <h3 className="font-bold text-[40px] leading-none tracking-[-1px] text-[#12131A]">
          {formatCounter(characterCount)}
        </h3>
        <h2 className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal text-[#12131A]">
          Total Characters
        </h2>
        <img
          src={CounterCharacterShape}
          alt=""
          aria-hidden="true"
          className="absolute h-full right-0 top-0"
        />
      </article>
      <article className="bg-[#FF9F00] rounded-[12px] p-5 flex flex-col gap-2 relative">
        <h3 className="font-bold text-[40px] leading-none tracking-[-1px] text-[#12131A]">
          {formatCounter(wordCount)}
        </h3>
        <h2 className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal text-[#12131A]">
          Word Count
        </h2>
        <img
          src={CounterWordShape}
          alt=""
          aria-hidden="true"
          className="absolute h-full right-0 top-0"
        />
      </article>
      <article className="bg-[#FE8159] rounded-[12px] p-5 flex flex-col gap-2 relative">
        <h3 className="font-bold text-[40px] leading-none tracking-[-1px] text-[#12131A]">
          {formatCounter(sentenceCount)}
        </h3>
        <h2 className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal text-[#12131A]">
          Sentence Count
        </h2>
        <img
          src={CounterSentenceShape}
          alt=""
          aria-hidden="true"
          className="absolute h-full right-0 top-0"
        />
      </article>
    </section>
  );
};

export default CounterSection;
