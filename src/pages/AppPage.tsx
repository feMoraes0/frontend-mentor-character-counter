import HeaderSection from '../sections/HeaderSection';
import InputSection from '../sections/InputSection';

function App() {
  return (
    <>
      <HeaderSection />
      <h1
        className="
          text-[40px] leading-[100%] tracking-[-1px] text-[#12131A] text-center font-bold mt-10
          dark:text-[#F2F2F7]
          md:text-[64px] md:max-w-[510px] md:mx-auto
          lg:mt-12
        "
      >
        Analyze your text in real-time.
      </h1>
      <InputSection />
    </>
  );
}

export default App;
