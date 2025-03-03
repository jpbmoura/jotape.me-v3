export default function OrangeColorShaders({ stage }: { stage: number }) {
  const squareStyle =
    "h-full w-[11.1%] rounded items-center justify-center flex font-semibold ";

  if (stage === 1) {
    return (
      <>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>100</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>200</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>300</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>400</div>
        <div className={`bg-orange-500 ${squareStyle} text-white`}>500</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>600</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>700</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>800</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>900</div>
      </>
    );
  }
  if (stage === 2) {
    return (
      <>
        <div className={`bg-orange-100  ${squareStyle} text-black`}>100</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>200</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>300</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>400</div>
        <div className={`bg-orange-500 ${squareStyle} text-white`}>500</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>600</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>700</div>
        <div className={`bg-zinc-800 ${squareStyle} text-white`}>800</div>
        <div className={`bg-orange-900 ${squareStyle} text-white`}>900</div>
      </>
    );
  }

  if (stage === 3) {
    return (
      <>
        <div className={`bg-orange-100  ${squareStyle} text-black`}>100</div>
        <div className={`bg-orange-200 ${squareStyle} text-black`}>200</div>
        <div className={`bg-orange-300 ${squareStyle} text-black`}>300</div>
        <div className={`bg-orange-400 ${squareStyle} text-black`}>400</div>
        <div className={`bg-orange-500 ${squareStyle} text-white`}>500</div>
        <div className={`bg-orange-600 ${squareStyle} text-white`}>600</div>
        <div className={`bg-orange-700 ${squareStyle} text-white`}>700</div>
        <div className={`bg-orange-800 ${squareStyle} text-white`}>800</div>
        <div className={`bg-orange-900 ${squareStyle} text-white`}>900</div>
      </>
    );
  }

  return;
}
