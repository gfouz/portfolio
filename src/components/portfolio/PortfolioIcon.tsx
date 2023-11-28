interface PortfolioIconProps {
  size: string | number | undefined;
  color: string | undefined;
}

export default function PortfolioIcon({ size, color }: PortfolioIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 308 197">
      <g transform="translate(129.52834,75.385338)">
        <path
          d="M -49.845351,66.261735 C -50.26142,68.090725 4.1609366,109.3271 8.4902123,109.7143 12.811053,110.11677 22.568785,120.20426 27.491227,119.3025 32.41367,118.39565 178.28492,48.746214 179.28853,46.932506 180.29775,45.12899 140.0608,35.826098 140.0608,35.826098 l 18.39661,-6.74536 c 0,0 7.08427,-3.744591 0.22489,-5.339227 -5.60276,-1.294052 -31.98884,-7.642025 -31.98884,-7.642025 0,0 -9.31074,-0.229253 -15.35487,1.25329 C 99.008587,20.363734 93.771302,22.202914 93.771302,22.202914 91.983371,21.275682 70.134587,14.866573 64.60492,14.48447 59.078068,14.102369 43.602318,14.127843 38.741723,15.207914 33.875503,16.282893 -49.412428,64.427648 -49.845351,66.261735 Z M 131.20266,32.376998 102.19089,23.99115 c 0,0 4.66663,-2.822455 11.14929,-3.112853 6.4911,-0.290396 29.46437,4.238777 30.98805,6.806497 1.43935,2.486207 -13.12557,4.692204 -13.12557,4.692204 z"
          style={{ fill: "#000000", strokeWidth: "3.78449" }}
        />
        <path
          d="m -120.67773,-58.136095 c 0,0 172.554722,23.756045 174.894983,26.735912 1.953423,2.499109 -19.369924,141.284653 -19.369924,141.284653 l -8.026473,0.89106 c 0,0 2.814104,-132.282885 0.256262,-135.959022 C 24.53863,-28.84305 -120.67773,-58.136095 -120.67773,-58.136095 Z"
          stroke="#000000"
          strokeWidth="2.63952"
          strokeMiterlimit="2.613"
        />
        <path
          d="m -114.59501,72.828547 c 3.64092,3.066636 132.736633,49.350973 137.238236,49.045553 4.496757,-0.28892 13.828737,-6.08375 16.014265,-8.61383 2.180683,-2.54245 22.358085,-146.719778 19.253872,-149.889597 -3.094551,-3.16982 -57.17171949,-9.5301 -57.17171949,-9.5301 L 1.5326209,-61.154165 c 0,0 -2.23387448,-7.672781 -11.4643222,-8.766534 -7.5236117,-0.887386 -43.5315427,-5.46464 -43.5315427,-5.46464 0,0 -8.321425,1.667457 -10.173317,5.3986 -3.810158,7.602618 -4.230823,11.734117 -4.230823,11.734117 -3.510374,-1.114392 -35.843536,-6.793653 -41.331516,-6.203439 -5.48798,0.573704 -18.43188,3.999421 -20.16773,6.818415 -1.74552,2.818995 11.13553,127.370665 14.77162,130.466193 z M -14.215712,-49.84517 -56.876914,-57.179508 c 0,0 -2.214534,-5.613224 2.601351,-7.507687 4.815887,-1.890335 33.996478,0.466395 40.877005,4.321357 6.6194253,3.743527 -0.817154,10.520668 -0.817154,10.520668 z m -107.694998,-8.494128 c 0,0 172.554722,23.649836 174.899814,26.617414 1.948591,2.48055 -19.374755,140.693814 -19.374755,140.693814 l -8.026473,0.89565 c 0,0 2.814104,-131.741557 0.265939,-135.398408 -2.552997,-3.644468 -147.764525,-32.80847 -147.764525,-32.80847 z"
          fill={color}
        />
      </g>
    </svg>
  );
}
