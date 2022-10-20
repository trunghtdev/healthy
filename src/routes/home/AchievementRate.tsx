const AchievementRate = () => {
  return (
    <div className="p-home-block-top-achievement-rate">
      <div>
        <svg>
          <filter id="filter0_d_0_94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_94" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_94" result="shape" />
          </filter>
          <g filter="url(#filter0_d_0_94)">
            <circle
              cx="100"
              cy="100"
              r="95"
              stroke="white"
              fill="none"
              strokeWidth="3"
              strokeDasharray={`calc(100 * 6)`}
              strokeDashoffset={`calc((100 * 6) - ((100 * 6) * ${60}) / 100)`}
            />
            <text
              fill="white"
              fontSize='0.836em'
              style={{ color: 'white' }}
              text-anchor="middle"
              transform="translate(85,130) rotate(90)">
              60
            </text>
            <text fill="white" fontSize='0.618em' text-anchor="middle" transform="translate(85,90) rotate(90)">
              5/21
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default AchievementRate