const CheckSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none">
    <g
      stroke="#cca75d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="m9 11.864 3 3 8-8" />
      <path d="M20 12.864v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h9" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .864h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default CheckSvg;
