// Hand-drawn SVGs for the LaLhama example. Colors come straight from the
// sky/orange scales used in the color palette post.

type SvgProps = React.SVGProps<SVGSVGElement>;

/** Llama head used as the brand mark. */
export function LlamaMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="20" fill="#0ea5e9" />
      <ellipse cx="14.5" cy="11" rx="3" ry="6.5" transform="rotate(-14 14.5 11)" fill="#fff7ed" />
      <ellipse cx="25.5" cy="11" rx="3" ry="6.5" transform="rotate(14 25.5 11)" fill="#fff7ed" />
      <ellipse cx="14.5" cy="11.5" rx="1.2" ry="3.6" transform="rotate(-14 14.5 11.5)" fill="#fdba74" />
      <ellipse cx="25.5" cy="11.5" rx="1.2" ry="3.6" transform="rotate(14 25.5 11.5)" fill="#fdba74" />
      <ellipse cx="20" cy="22" rx="9.5" ry="10" fill="#fff7ed" />
      <ellipse cx="20" cy="27.5" rx="6" ry="4.5" fill="#fed7aa" />
      <path d="M14.5 20.5q1.6 1.4 3.2 0M22.3 20.5q1.6 1.4 3.2 0" stroke="#0c4a6e" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M18.4 28q1.6 1 3.2 0" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** A llama asleep on the mattress, tucked under a blanket. */
export function SleepingLlama(props: SvgProps) {
  return (
    <svg viewBox="0 0 480 400" aria-hidden="true" {...props}>
      {/* Clouds */}
      <g fill="#fff">
        <g opacity="0.9">
          <circle cx="70" cy="92" r="22" />
          <circle cx="98" cy="80" r="30" />
          <circle cx="130" cy="94" r="20" />
          <rect x="50" y="94" width="100" height="20" rx="10" />
        </g>
        <g opacity="0.7">
          <circle cx="360" cy="60" r="18" />
          <circle cx="384" cy="50" r="24" />
          <circle cx="410" cy="62" r="16" />
          <rect x="344" y="60" width="82" height="16" rx="8" />
        </g>
      </g>

      {/* Sparkles */}
      <g fill="#fb923c">
        <path d="M300 120c.8 6 4 9 10 10-6 1-9.2 4-10 10-.8-6-4-9-10-10 6-1 9.2-4 10-10z" />
        <path d="M430 150c.5 4 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5 3.9-.5 6-2.6 6.5-6.5z" />
        <path d="M40 180c.5 4 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5 3.9-.5 6-2.6 6.5-6.5z" />
      </g>

      {/* Zzz */}
      <g fill="#0284c7" fontFamily="var(--font-nunito)" fontWeight="900">
        <text x="150" y="150" fontSize="22">z</text>
        <text x="172" y="126" fontSize="30">z</text>
        <text x="200" y="96" fontSize="40">Z</text>
      </g>

      {/* Mattress */}
      <ellipse cx="240" cy="352" rx="200" ry="14" fill="#0c4a6e" opacity="0.12" />
      <rect x="40" y="262" width="400" height="80" rx="30" fill="#fff" />
      <rect x="40" y="262" width="400" height="80" rx="30" fill="none" stroke="#bae6fd" strokeWidth="3" />
      <path d="M48 300h384" stroke="#e0f2fe" strokeWidth="6" />
      <g fill="#bae6fd">
        <circle cx="100" cy="322" r="3" />
        <circle cx="160" cy="322" r="3" />
        <circle cx="220" cy="322" r="3" />
        <circle cx="280" cy="322" r="3" />
        <circle cx="340" cy="322" r="3" />
        <circle cx="400" cy="322" r="3" />
      </g>

      {/* Pillow */}
      <ellipse cx="110" cy="258" rx="66" ry="20" fill="#e0f2fe" />
      <path d="M58 256q52 10 104 0" stroke="#bae6fd" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Woolly body */}
      <g fill="#fff7ed">
        <circle cx="210" cy="226" r="34" />
        <circle cx="250" cy="206" r="40" />
        <circle cx="300" cy="202" r="42" />
        <circle cx="348" cy="214" r="36" />
        <circle cx="380" cy="238" r="26" />
        <rect x="190" y="220" width="210" height="46" rx="20" />
      </g>

      {/* Neck and head resting on the pillow */}
      <path d="M214 230c-30 0-52-4-70-18l-18 24c24 20 58 26 92 22z" fill="#fff7ed" />
      <ellipse cx="160" cy="180" rx="8" ry="24" transform="rotate(38 160 180)" fill="#ffedd5" />
      <ellipse cx="144" cy="174" rx="9" ry="26" transform="rotate(18 144 174)" fill="#fff7ed" />
      <ellipse cx="144" cy="175" rx="3.5" ry="16" transform="rotate(18 144 175)" fill="#fdba74" />
      <ellipse cx="130" cy="222" rx="42" ry="32" fill="#fff7ed" />
      <ellipse cx="96" cy="236" rx="24" ry="17" fill="#fed7aa" />
      <path d="M86 240q6 4 12 1" stroke="#9a3412" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="84" cy="230" r="2.4" fill="#9a3412" />
      <path d="M118 212q9 8 18 0" stroke="#0c4a6e" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="144" cy="230" r="8" fill="#fdba74" opacity="0.55" />
      {/* Fringe */}
      <g fill="#ffedd5">
        <circle cx="150" cy="196" r="12" />
        <circle cx="164" cy="204" r="10" />
      </g>

      {/* Blanket */}
      <path
        d="M236 180c40-14 110-16 170 8 30 12 40 40 34 74H236c-14-28-14-60 0-82z"
        fill="#0ea5e9"
      />
      <path
        d="M236 180c40-14 110-16 170 8 30 12 40 40 34 74H236c-14-28-14-60 0-82z"
        fill="none"
        stroke="#0284c7"
        strokeWidth="3"
      />
      <g stroke="#fb923c" strokeWidth="8" strokeLinecap="round">
        <path d="M272 176v86" />
        <path d="M336 174v88" />
        <path d="M396 186v76" />
      </g>
      <path d="M232 184c10 26 10 54 4 78" stroke="#e0f2fe" strokeWidth="10" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const slabs = [
  { y: 96, h: 18, top: "#e0f2fe", front: "#bae6fd", side: "#7dd3fc" },
  { y: 178, h: 38, top: "#7dd3fc", front: "#38bdf8", side: "#0ea5e9" },
  { y: 278, h: 26, top: "#0ea5e9", front: "#0284c7", side: "#0369a1" },
  { y: 364, h: 46, top: "#075985", front: "#0c4a6e", side: "#082f49" },
];

const X0 = 64;
const W = 260;
const DX = 60;
const DY = 40;

/** Exploded view of the mattress, one slab per layer. */
export function MattressLayers(props: SvgProps) {
  return (
    <svg viewBox="0 0 400 430" aria-hidden="true" {...props}>
      {slabs.map(({ y, h, top, front, side }, i) => (
        <g key={y}>
          <path d={`M${X0} ${y}h${W}l${DX} -${DY}h-${W}z`} fill={top} />
          <rect x={X0} y={y} width={W} height={h} fill={front} />
          <path d={`M${X0 + W} ${y}l${DX} -${DY}v${h}l-${DX} ${DY}z`} fill={side} />

          {i === 0 && (
            <path
              d={`M${X0 + 30} ${y - 8}q20 -12 40 0t40 0t40 0t40 0t40 0`}
              stroke="#bae6fd"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          )}
          {i === 1 && (
            <g fill="#e0f2fe" opacity="0.7">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <circle key={n} cx={X0 + 24 + n * 36} cy={y + h / 2} r="4" />
              ))}
            </g>
          )}
          {i === 3 && (
            <g stroke="#7dd3fc" strokeWidth="2.5" fill="none">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                <path
                  key={n}
                  d={`M${X0 + 20 + n * 32} ${y + 8}c10 0 10 6 0 6s-10 6 0 6 10 6 0 6-10 6 0 6`}
                  strokeLinecap="round"
                />
              ))}
            </g>
          )}

          <circle cx={X0 - 34} cy={y + h / 2 - 6} r="15" fill="#c2410c" />
          <text
            x={X0 - 34}
            y={y + h / 2 - 1}
            textAnchor="middle"
            fontSize="15"
            fontWeight="800"
            fontFamily="var(--font-nunito)"
            fill="#fff"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
