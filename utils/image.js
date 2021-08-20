import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";

const telescope = (props) => html`<svg
  width="71"
  height="63"
  viewBox="0 0 71 63"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="${{
    top: "10px",
    position: "relative",
  }}"
>
  <g clip-path="url(#clip0)">
    <path
      d="M48.9137 9.18982L53.6085 5.77881L65.4985 22.1439L60.8036 25.5549L48.9137 9.18982Z"
      fill="#56ACE0"
    />
    <path
      d="M24.4031 30.8094L47.7173 13.8707L55.9822 25.2463L32.668 42.185L24.4031 30.8094Z"
      fill="white"
    />
    <path
      d="M17.4432 39.2705L23.0023 35.2316L28.0371 42.1614L22.478 46.2003L17.4432 39.2705Z"
      fill="#FFC10D"
    />
    <path
      d="M10.4011 47.5958L15.9602 43.5569L17.9432 46.2862L12.3841 50.3251L10.4011 47.5958Z"
      fill="#56ACE0"
    />
    <path
      d="M42.049 21.8657L45.1087 26.0769C45.7128 26.9085 45.5286 28.0686 44.6963 28.6732C43.8641 29.2779 42.7039 29.0947 42.0997 28.2631L39.0401 24.0519L35.9137 26.3233L37.0059 27.8265C37.6101 28.6581 37.4259 29.8182 36.5936 30.4228C35.7613 31.0275 34.6011 30.8443 33.9969 30.0127L32.9048 28.5094L28.53 31.6879L33.1156 37.9993L51.8736 24.3708L47.2881 18.0594L42.049 21.8657Z"
      fill="#FFC10D"
    />
    <path
      d="M52.9392 1.6713L45.2247 7.2762C44.3925 7.88088 44.2082 9.04094 44.8124 9.87252L45.5328 10.864L20.7141 28.8958C19.8818 29.5005 19.6976 30.6606 20.3018 31.4921L20.8285 32.2171L13.7542 37.3569C12.922 37.9616 12.7377 39.1216 13.3419 39.9532L13.7757 40.5502L6.7014 45.69C5.87206 46.2762 5.68491 47.4547 6.28909 48.2863L10.4564 54.0221C11.0605 54.8536 12.2207 55.0369 13.053 54.4322L20.1166 49.3002L20.5504 49.8972C21.1546 50.7288 22.3148 50.9121 23.147 50.3074L30.2107 45.1754L30.7374 45.9004C31.3416 46.7319 33.334 46.3105 33.334 46.3105L58.1663 28.2526L58.8867 29.244C59.4908 30.0756 60.651 30.2589 61.4833 29.6542L69.1978 24.0493C70.0301 23.4446 70.2143 22.2846 69.6101 21.453L55.5359 2.08147C54.9317 1.24989 53.7608 1.07437 52.9392 1.6713ZM17.9352 46.2753L12.3761 50.3143L10.4009 47.5956L15.96 43.5567L17.9352 46.2753ZM28.0292 42.1505L22.4701 46.1894L17.4353 39.2596L22.9944 35.2207L28.0292 42.1505ZM55.982 25.2461L32.6678 42.1848L24.4029 30.8092L47.7171 13.8705L55.982 25.2461ZM65.4983 22.1437L60.8035 25.5547L48.9135 9.18961L53.6084 5.7786L65.4983 22.1437Z"
      fill="#194F82"
    />
    <path
      d="M45.8267 11.2685L46.2312 10.9746L45.9373 10.5701L45.2169 9.57862C44.7753 8.97076 44.9094 8.12331 45.5186 7.68071L53.2331 2.07581C53.8335 1.63961 54.6911 1.76936 55.1314 2.37536L69.2056 21.7469C69.6472 22.3548 69.5131 23.2022 68.9039 23.6448L61.1894 29.2497C60.5802 29.6923 59.7328 29.558 59.2912 28.9502L58.5708 27.9587L58.2768 27.554L57.8722 27.8482L33.1314 45.8397C33.0837 45.8478 33.0208 45.8578 32.9463 45.8679C32.7643 45.8925 32.5194 45.9167 32.261 45.9173C31.9993 45.9179 31.7449 45.8942 31.535 45.8344C31.3225 45.7739 31.2027 45.6902 31.1419 45.6065L30.6152 44.8815L30.3213 44.477L29.9168 44.7709L22.8532 49.9029C22.244 50.3455 21.3965 50.2112 20.9549 49.6034L20.5211 49.0063L20.2272 48.6018L19.8227 48.8957L12.7591 54.0277C12.1499 54.4703 11.3025 54.336 10.8609 53.7282L6.69359 47.9924C6.24982 47.3816 6.39293 46.5204 6.99002 46.0983L6.99005 46.0983L6.9953 46.0945L14.0696 40.9547L14.4741 40.6608L14.1802 40.2563L13.7464 39.6593C13.3048 39.0514 13.4389 38.204 14.0481 37.7614L21.1224 32.6216L21.5269 32.3277L21.233 31.9232L20.7063 31.1982C20.2647 30.5904 20.3988 29.7429 21.008 29.3003L45.8267 11.2685ZM18.2291 46.6798L18.6336 46.3859L18.3397 45.9814L16.3645 43.2628L16.0706 42.8583L15.6661 43.1522L10.107 47.1911L9.70249 47.485L9.99638 47.8895L11.9716 50.6082L12.2655 51.0127L12.67 50.7188L18.2291 46.6798ZM28.3231 42.555L28.7276 42.2611L28.4338 41.8566L23.3989 34.9268L23.105 34.5223L22.7005 34.8162L17.1414 38.8551L16.7369 39.149L17.0308 39.5535L22.0656 46.4833L22.3595 46.8878L22.764 46.594L28.3231 42.555ZM56.2758 25.6506L56.6804 25.3567L56.3865 24.9522L48.1216 13.5766L47.8277 13.1721L47.4232 13.466L24.109 30.4047L23.7045 30.6986L23.9984 31.1031L32.2633 42.4787L32.5572 42.8832L32.9617 42.5893L56.2758 25.6506ZM65.7922 22.5482L66.1967 22.2543L65.9028 21.8498L54.0129 5.48471L53.719 5.0802L53.3145 5.3741L48.6197 8.7851L48.2151 9.07899L48.509 9.4835L60.3989 25.8486L60.6928 26.2531L61.0973 25.9592L65.7922 22.5482Z"
      stroke="black"
      stroke-opacity="0.43"
    />
  </g>
  <defs>
    <clipPath id="clip0">
      <rect
        width="67"
        height="27.6739"
        fill="white"
        transform="translate(0.239014 39.9591) rotate(-36)"
      />
    </clipPath>
  </defs>
</svg>`;

const flyingTelescopeSvg = (props) => html` <svg
  viewBox="0 0 268 159"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="${{
    transform: "matrix(0.99, -0.18, 0.17, 0.98, 0, 0)",
    //transform: "matrix(0.87, -0.5, 0.48, 0.87, 0, 0)",
    left: "-19px",
    width: "266px",
    position: "relative",
    display: "block",
  }}"
  ...${props}
>
  <path
    d="M0.678907 71.0373C0.678907 71.0373 120.118 18.3893 201.179 71.0373M0.678907 92.0373C0.678907 92.0373 120.118 39.3893 201.179 92.0373M0.678907 113.537C0.678907 113.537 120.118 60.8893 201.179 113.537"
    stroke="#CCFFCC"
    stroke-width="3"
  />
  <g clip-path="url(#clip-telescope)">
    <path
      d="M239.27 88.6765L253.071 96.645L225.295 144.755L211.493 136.786L239.27 88.6765Z"
      fill="#56ACE0"
    />
    <path
      d="M157.651 51.3325L226.19 90.9033L206.882 124.345L138.343 84.7742L157.651 51.3325Z"
      fill="white"
    />
    <path
      d="M128.649 43.3223L144.992 52.7577L133.23 73.1299L116.887 63.6945L128.649 43.3223Z"
      fill="#FFC10D"
    />
    <path
      d="M99.8959 34.9541L116.239 44.3895L111.606 52.4131L95.2635 42.9776L99.8959 34.9541Z"
      fill="#56ACE0"
    />
    <path
      d="M199.8 85.6132L192.652 97.9932C191.241 100.438 188.125 101.271 185.678 99.8589C183.231 98.4463 182.395 95.3308 183.806 92.8861L190.954 80.5061L181.763 75.1998L179.212 79.619C177.8 82.0636 174.684 82.8972 172.238 81.4846C169.791 80.072 168.955 76.9566 170.366 74.5119L172.918 70.0927L160.057 62.6675L149.344 81.2219L204.489 113.06L215.201 94.5053L199.8 85.6132Z"
      fill="#FFC10D"
    />
    <path
      d="M262.628 90.379L239.949 77.2853C237.502 75.8727 234.386 76.7063 232.975 79.151L231.292 82.0658L158.33 39.9414C155.884 38.5288 152.767 39.3624 151.356 41.807L150.125 43.9383L129.329 31.9312C126.882 30.5186 123.766 31.3522 122.354 33.7969L121.341 35.552L100.544 23.5449C98.1468 22.1191 94.9812 22.9659 93.5698 25.4106L83.8345 42.2725C82.4231 44.7172 83.2593 47.8327 85.706 49.2452L106.471 61.2342L105.458 62.9894C104.047 65.434 104.883 68.5495 107.33 69.9621L128.095 81.9511L126.865 84.0824C125.453 86.527 128.736 91.0551 128.736 91.0551L201.779 133.184L200.096 136.099C198.684 138.544 199.52 141.659 201.967 143.072L224.646 156.166C227.093 157.578 230.209 156.745 231.62 154.3L264.499 97.3518C265.911 94.9071 265.043 91.7735 262.628 90.379ZM111.624 52.3826L95.2811 42.9472L99.8954 34.955L116.238 44.3904L111.624 52.3826ZM133.247 73.0995L116.905 63.664L128.667 43.2918L145.009 52.7272L133.247 73.0995ZM206.881 124.346L138.343 84.7751L157.65 51.3333L226.189 90.9042L206.881 124.346ZM225.295 144.756L211.493 136.787L239.269 88.6773L253.071 96.6458L225.295 144.756Z"
      fill="#194F82"
    />
    <path
      d="M231.042 82.4988L231.475 82.7488L231.725 82.3158L233.408 79.401C234.681 77.1958 237.491 76.4436 239.699 77.7183L262.378 90.812C264.557 92.0698 265.338 94.8986 264.066 97.1018L231.187 154.05C229.914 156.255 227.104 157.007 224.896 155.733L202.217 142.639C200.009 141.364 199.256 138.554 200.529 136.349L202.212 133.434L202.462 133.001L202.028 132.751L129.081 90.677C129.062 90.6495 129.039 90.6155 129.012 90.5756C128.928 90.4519 128.809 90.2714 128.671 90.0467C128.392 89.5962 128.038 88.9738 127.727 88.281C127.415 87.5851 127.157 86.8373 127.057 86.1328C126.956 85.4255 127.022 84.8106 127.298 84.3324L128.528 82.2011L128.778 81.7681L128.345 81.5181L107.58 69.5291C105.372 68.2544 104.618 65.4446 105.891 63.2394L106.904 61.4842L107.154 61.0512L106.721 60.8012L85.956 48.8122C83.7481 47.5375 82.9944 44.7277 84.2675 42.5225L94.0028 25.6606C95.2778 23.4522 98.1357 22.6942 100.288 23.9746L100.288 23.9747L100.294 23.9779L121.091 35.985L121.524 36.235L121.774 35.802L122.787 34.0469C124.06 31.8417 126.871 31.0895 129.079 32.3642L149.875 44.3713L150.308 44.6213L150.558 44.1883L151.789 42.057C153.062 39.8518 155.872 39.0997 158.08 40.3744L231.042 82.4988ZM111.374 52.8156L111.807 53.0656L112.057 52.6326L116.671 44.6404L116.921 44.2074L116.488 43.9574L100.145 34.522L99.7124 34.272L99.4624 34.705L94.8481 42.6972L94.5981 43.1302L95.0311 43.3802L111.374 52.8156ZM132.997 73.5325L133.43 73.7825L133.68 73.3495L145.442 52.9772L145.692 52.5442L145.259 52.2942L128.917 42.8588L128.484 42.6088L128.234 43.0418L116.472 63.414L116.222 63.847L116.655 64.097L132.997 73.5325ZM206.631 124.779L207.064 125.029L207.314 124.596L226.622 91.1542L226.872 90.7212L226.439 90.4712L157.9 50.9003L157.467 50.6503L157.217 51.0833L137.91 84.5251L137.66 84.9581L138.093 85.2081L206.631 124.779ZM225.045 145.189L225.478 145.439L225.728 145.006L253.504 96.8958L253.754 96.4628L253.321 96.2128L239.519 88.2443L239.086 87.9943L238.836 88.4273L211.06 136.537L210.81 136.97L211.243 137.22L225.045 145.189Z"
      stroke="black"
      stroke-opacity="0.43"
    />
  </g>
  <defs>
    <clipPath id="clip-telescope">
      <rect
        width="184"
        height="76"
        fill="white"
        transform="translate(107.704 0.928894) rotate(30)"
      />
    </clipPath>
  </defs>
</svg>`;

const flyingFerrisSvg = (props) => html`
  <svg
    width="287"
    height="178"
    viewBox="0 0 287 178"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="${{
      left: "-88.29px",
      transform: "matrix(0.87, -0.5, 0.48, 0.87, 0, 0)",
      position: "relative",
      display: "block",
    }}"
    ...${props}
  >
    <path
      d="M1.07224 69.5339C1.07224 69.5339 120.512 16.8859 201.572 69.5339M1.07224 90.5339C1.07224 90.5339 120.512 37.8859 201.572 90.5339M1.07224 112.034C1.07224 112.034 120.512 59.3859 201.572 112.034"
      stroke="#CCFFCC"
      stroke-width="3"
    />
    <g clip-path="url(#clip-ferris)">
      <path
        d="M227.761 146.417L230.265 143.75C230.384 143.713 230.503 143.674 230.621 143.629C234.105 142.291 235.924 137.429 236.152 130.336L234.014 131.157C234.021 130.471 234.013 129.763 233.987 129.032L234.983 128.649C234.776 118.717 231.783 104.961 226.213 90.4497C221.346 77.7713 215.403 66.8366 209.649 59.2609L206.176 60.5939L206.176 60.5937L210.379 58.9803C204.253 51.3076 198.323 47.3693 194.064 49.004C193.393 49.2616 192.784 49.651 192.235 50.1604L190.312 49.8777C190.312 49.8777 189.115 49.5191 187.648 51.5227C186.355 53.2897 181.759 61.4186 179.36 65.6984C178.037 67.6491 177.252 68.9289 177.389 68.9621C177.604 69.0143 180.649 66.8134 183.558 62.8313C185.188 60.8685 187.406 58.4204 189.118 56.8045C188.539 59.7026 186.91 76.0493 197.667 103.988C208.66 132.541 222.461 141.81 224.211 142.737C222.071 143 217.481 142.853 214.192 142.593C209.381 141.939 205.617 142.477 205.485 142.645C205.402 142.751 206.833 143.055 209.111 143.439C213.723 144.597 222.513 146.773 224.65 147.061C227.072 147.388 227.761 146.417 227.761 146.417Z"
        fill="#A52B00"
      />
      <path
        d="M231.095 155.044L234.53 142.516C234.815 142.302 235.099 142.088 235.38 141.871L241.253 143.298C241.851 143.444 242.49 143.275 242.947 142.856C243.401 142.437 243.606 141.823 243.488 141.236L242.325 135.458C242.673 135.083 243.01 134.701 243.344 134.319L249.43 134.598C250.051 134.629 250.649 134.343 251.011 133.847C251.376 133.351 251.457 132.717 251.22 132.165L248.906 126.735C249.168 126.308 249.424 125.877 249.671 125.443L255.742 124.565C256.358 124.476 256.89 124.085 257.15 123.532C257.41 122.981 257.36 122.344 257.019 121.851L253.643 116.993C253.816 116.528 253.983 116.059 254.143 115.588L259.951 113.58C260.539 113.378 260.987 112.895 261.13 112.306C261.276 111.717 261.098 111.108 260.662 110.692L256.366 106.6C256.442 106.109 256.515 105.616 256.579 105.121L261.89 102.068C262.428 101.758 262.773 101.203 262.797 100.601C262.822 100 262.523 99.4381 262.01 99.1164L256.956 95.9383C256.933 95.443 256.903 94.9481 256.865 94.4504L261.485 90.4707C261.956 90.0655 262.184 89.4607 262.086 88.8675C261.988 88.2767 261.582 87.7858 261.012 87.5685L255.376 85.4235C255.254 84.9498 255.127 84.477 254.992 84.0064L258.756 79.2346C259.138 78.7515 259.239 78.1173 259.025 77.5581C258.811 77.0005 258.31 76.5962 257.704 76.4943L251.713 75.4665C251.499 75.0259 251.276 74.5878 251.05 74.1547L253.803 68.7894C254.081 68.2462 254.054 67.6079 253.732 67.1043C253.407 66.5991 252.834 66.3009 252.213 66.3162L246.116 66.4487C245.811 66.0542 245.502 65.6669 245.188 65.2823L246.818 59.5398C246.985 58.9554 246.831 58.3374 246.408 57.9076C245.989 57.4781 245.36 57.2945 244.753 57.425L238.763 58.7092C238.385 58.3851 238.002 58.0671 237.615 57.7522L238.07 51.8374C238.117 51.2365 237.839 50.6624 237.337 50.3239C236.837 49.9831 236.181 49.9231 235.609 50.1668L229.948 52.5602C229.515 52.3177 229.077 52.0814 228.637 51.85L227.895 45.9821C227.818 45.3869 227.43 44.8806 226.868 44.6438C226.304 44.4053 225.648 44.4726 225.13 44.8177L220.03 48.2246C219.555 48.0708 219.078 47.9213 218.598 47.7793L216.684 42.1961C216.487 41.6341 216.006 41.2101 215.403 41.0854C214.802 40.9592 214.167 41.1489 213.725 41.5842L209.39 45.8658C208.886 45.8049 208.38 45.7468 207.87 45.6991L204.868 40.6268C204.564 40.111 204.002 39.7937 203.382 39.7855C202.762 39.7794 202.175 40.0841 201.827 40.5905L198.418 45.5815C198.326 45.5882 198.235 45.597 198.143 45.604L185.036 40.2247C185.036 40.2247 183.414 39.2516 181.634 42.2578C180.063 44.9091 174.638 57.5087 171.812 64.1484C170.218 67.106 169.283 69.0723 169.466 69.1697C169.757 69.3231 173.619 66.4493 177.151 60.4728C180.515 55.6194 185.975 48.9006 187.145 49.5354C187.145 49.5354 188.92 50.0873 190.728 51.8671C190.696 51.9702 190.759 51.7617 190.728 51.8671C190.728 51.8671 187.236 105.419 224.045 139.72C226.76 144.21 225.301 148.119 225.301 148.119C225.105 149.35 216.899 149.509 211.307 149.196C204.773 148.359 200.383 149.554 200.331 149.857C200.298 150.049 202.317 150.491 205.463 151.019C212.09 152.759 224.702 156.015 227.604 156.384C230.893 156.802 231.095 155.044 231.095 155.044Z"
        fill="#F74C00"
      />
      <path
        d="M226.145 134.114C226.145 134.114 228.961 140.545 240.991 145.795L244.161 145.976C244.161 145.976 252.296 127.538 269.413 144.776C269.413 144.776 265.751 144.097 254.503 149.026C254.503 149.026 259.074 154.45 269.895 152.401C269.895 152.401 261.384 166.138 242.809 151.426C242.809 151.426 225.084 147.983 221.62 134.866L226.145 134.114Z"
        fill="#F74C00"
      />
      <path
        d="M222.994 101.292C222.994 101.292 229.712 103.931 226.486 110.387C226.486 110.387 221.228 116.506 216.541 114.205C216.541 114.205 209.656 110.139 213.05 105.109C213.05 105.109 215.2 99.8119 222.994 101.292Z"
        fill="black"
      />
      <path
        d="M223.17 107.267C221.235 108.01 219.226 107.47 218.685 106.06C218.144 104.65 219.275 102.905 221.211 102.162C223.147 101.419 225.155 101.959 225.697 103.369C226.238 104.778 225.107 106.524 223.17 107.267Z"
        fill="white"
      />
      <path
        d="M216.562 80.4739C216.562 80.4739 223.005 86.9505 216.124 92.0346C216.124 92.0346 208.008 97.7089 204.187 89.2669C204.187 89.2669 202.077 77.4412 216.562 80.4739Z"
        fill="black"
      />
      <path
        d="M214.734 85.6706C212.737 86.437 210.666 85.88 210.108 84.426C209.55 82.9727 210.716 81.1722 212.713 80.4059C214.71 79.6393 216.781 80.1968 217.339 81.6502C217.897 83.1042 216.731 84.9041 214.734 85.6706Z"
        fill="white"
      />
      <path
        d="M203.534 96.9453L208.15 106.587C208.15 106.587 206.422 106.864 204.723 106.027C204.723 106.027 199.664 104.043 202.214 98.56C202.214 98.56 202.66 97.6521 203.534 96.9453Z"
        fill="black"
      />
      <path
        d="M197.439 53.5806C197.407 53.4985 197.37 53.4203 197.333 53.3425C196.827 49.8307 195.704 39.8449 198.616 35.9738C198.616 35.9738 217.182 42.8643 218.722 20.3648L204.223 28.4812C204.223 28.4812 205.891 21.0871 213.935 16.5419C213.935 16.5419 198.045 6.1949 196.021 30.6774C196.021 30.6774 189.709 35.2501 191.006 55.3953L191.065 55.3879C191.101 55.5818 191.152 55.775 191.225 55.9657C191.878 57.6658 193.798 58.5103 195.514 57.8515C197.23 57.1929 198.091 55.2807 197.439 53.5806Z"
        fill="#F74C00"
      />
    </g>
    <defs>
      <clipPath id="clip-ferris">
        <rect
          width="155"
          height="81"
          fill="white"
          transform="translate(231.084 4.11426) rotate(69)"
        />
      </clipPath>
    </defs>
  </svg>
`;

const flyingVue = (props) => html`
  <svg
    width="287"
    height="186"
    viewBox="0 0 287 186"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="${{
      position: "relative",
      left: "-108px",
      transform: "rotate(-19.41deg)",
    }}"
    ...${props}
  >
    <path
      d="M8.24017 53.6184C8.24017 53.6184 134.445 20.303 206.272 84.9835M4.95505 74.3598C4.95505 74.3598 131.16 41.0444 202.987 105.725M1.59171 95.5951C1.59171 95.5951 127.797 62.2797 199.623 126.96"
      stroke="#CCFFCC"
      stroke-width="3"
    />
    <g clip-path="url(#clip-vue)">
      <path
        d="M240.12 52.5417L211.163 67.939L212.309 35.1631L166.003 6.22815L161.034 148.162L286.426 81.4767L240.12 52.5417Z"
        fill="#42B883"
      />
      <path
        d="M240.12 52.5418L211.163 67.9391L212.308 35.1632L190.085 21.2764L187.107 106.437L262.344 66.4286L240.12 52.5418V52.5418Z"
        fill="#35495E"
      />
    </g>
    <defs>
      <clipPath id="clip-vue">
        <rect
          width="142"
          height="123"
          fill="white"
          transform="translate(166.003 6.22815) rotate(32)"
        />
      </clipPath>
    </defs>
  </svg>
`;

const image = ({ tags }) => {
  const flyingIcons = {
    o11y: flyingTelescopeSvg,
    rust: flyingFerrisSvg,
    vue: flyingVue,
  };
  const tagIcons = {
    o11y: telescope,
  };
  return html`
    <div class="page-wrapper">
      <div class="icon-section">
        ${tags.slice(0, 3).map((tag) => html`<${flyingIcons[tag]} />`)}
      </div>
      <div class="title-section">
        <h1>This is a test</h1>
      </div>
      <div class="url-section"><span class="text">darrik.dev</span></div>
      <div class="tags-section">
        ${tags.map(
          (tag) =>
            html`<div class="text">
              <${tagIcons[tag]} /><span>${tag}</span>
            </div>`
        )}
      </div>
    </div>
  `;
};
render(html`<${image} tags=${["o11y", "rust", "vue"]} />`, document.body);