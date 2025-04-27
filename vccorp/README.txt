For pure css for hexagon
  .r-hex {
          position: absolute;
          overflow: hidden;
          margin: 4em 0;
          width: 30em; /* Increased from 20em */
          height: 25.98em; /* Increased from 17.32em (maintaining the ratio) */
          left: -70px;
          top: -30px;
          width: 29em;
          height: 28.32em;
          transform: rotate(-30deg) skewX(30deg);
          border-radius: 0.5em;
        }
        .r-hex *,
        .r-hex *:before {
          display: block;
          overflow: hidden;
          width: inherit;
          height: inherit;
          border-radius: inherit;
        }
        .r-hex-inner {
          transform: skewX(-30deg) rotate(60deg) skewX(30deg);
          opacity: 1;
          transition: opacity 0.75s;
          cursor: pointer;
        }
        .r-hex:first-child .r-hex-inner:before,
        .r-hex-inner-2 {
          transform: skewX(-30deg) rotate(60deg) skewX(30deg);
          background: orange;
          content: "";
        }
        .r-hex-inner-2:before {
          margin-top: -7.25em;
          width: 80%;
          height: 40em;
          transform: skewX(-30deg) rotate(-90deg);
          background-image: url("../src/assets/Ảnh 2.png");
          background-position: center;
          background-size: contain;
          line-height: 20em;
          text-align: center;
          background-position-y: 125px;
          content: "";
        }

        .hexagon-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .hexagon-wrapper-mobile {
          width: 120px;
          height: 120px;
          position: relative;
          margin: 0 auto;
          overflow: hidden;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          background-color: white;
        }

        .hexagon-image-mobile {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        /* Second, smaller hexagon */
        .r-hex1 {
          position: absolute;
          overflow: hidden;
          margin: 4em 0;
          width: 365px;
          height: 314px;
          left: 85px;
          bottom: -180px;
          transform: rotate(-30deg) skewX(30deg);
          border-radius: 0.5em;
          z-index: 10;
        }

        .r-hex1 *,
        .r-hex1 *:before {
          display: block;
          overflow: hidden;
          width: inherit;
          height: inherit;
          border-radius: inherit;
        }

        .r-hex1-inner {
          transform: skewX(-30deg) rotate(60deg) skewX(30deg);
          opacity: 1;
          transition: opacity 0.75s;
          cursor: pointer;
        }

        .r-hex1:first-child .r-hex1-inner:before,
        .r-hex1-inner .r-hex-inner-2 {
          transform: skewX(-30deg) rotate(60deg) skewX(30deg);
          background: purple; /* Different background color */
          content: "";
        }

        .r-hex1-inner .r-hex-inner-2:before {
          margin-top: -5.5em;
          width: 98%;
          height: 33em;
          transform: skewX(-30deg) rotate(-90deg);
          background-image: url("../src/assets/Ảnh 1.png");
          background-position: center;
          background-size: contain;
          line-height: 10em;
          text-align: center;
          background-position-y: 66px;
          content: "";
        }