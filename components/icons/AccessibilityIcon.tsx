import { twMerge } from "tailwind-merge";

export const AccessibilityIcon = ({ className }: { className?: string }) => (
  <div
    className={twMerge(
      "flex h-10 w-10 items-center justify-center rounded-md bg-[#F6E7FF]",
      className,
    )}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M12.7678 6.51786C12.7678 5.92586 13.003 5.3581 13.4216 4.93949C13.8402 4.52089 14.408 4.28571 15 4.28571C15.592 4.28571 16.1597 4.52089 16.5783 4.93949C16.9969 5.3581 17.2321 5.92586 17.2321 6.51786C17.2321 7.10986 16.9969 7.67761 16.5783 8.09622C16.1597 8.51483 15.592 8.75 15 8.75C14.408 8.75 13.8402 8.51483 13.4216 8.09622C13.003 7.67761 12.7678 7.10986 12.7678 6.51786ZM15 2.5C14.394 2.50001 13.7959 2.63708 13.2504 2.90097C12.7049 3.16485 12.2261 3.5487 11.85 4.02379C11.4738 4.49888 11.21 5.05289 11.0783 5.64437C10.9465 6.23585 10.9503 6.84947 11.0893 7.43929L8.21068 6.27857C7.51226 5.99728 6.73103 6.00306 6.03684 6.29465C5.34264 6.58624 4.79161 7.14006 4.50354 7.83571C4.36095 8.18022 4.28806 8.54956 4.28907 8.92241C4.29009 9.29525 4.36499 9.6642 4.50945 10.0079C4.65392 10.3516 4.86507 10.6633 5.13072 10.9249C5.39636 11.1866 5.71123 11.3929 6.05711 11.5321L9.64283 12.9804V17.2375L6.40533 23.3268C6.23004 23.6563 6.12136 24.017 6.08549 24.3885C6.04963 24.76 6.08729 25.1349 6.19631 25.4918C6.30534 25.8488 6.4836 26.1807 6.72092 26.4687C6.95823 26.7568 7.24996 26.9952 7.57943 27.1705C8.24484 27.5246 9.02363 27.5997 9.74448 27.3796C10.4653 27.1594 11.0692 26.6618 11.4232 25.9964L15 19.2679L18.5785 25.9964C18.9323 26.6618 19.5359 27.1595 20.2566 27.3798C20.9773 27.6002 21.756 27.5252 22.4214 27.1714C23.0868 26.8176 23.5844 26.214 23.8048 25.4934C24.0251 24.7727 23.9502 23.994 23.5964 23.3286L20.3571 17.2357V12.9804L23.9428 11.5321C24.2887 11.3929 24.6036 11.1866 24.8692 10.9249C25.1349 10.6633 25.346 10.3516 25.4905 10.0079C25.6349 9.6642 25.7099 9.29525 25.7109 8.92241C25.7119 8.54956 25.639 8.18022 25.4964 7.83571C25.2087 7.13974 24.6578 6.58551 23.9635 6.29357C23.2693 6.00163 22.4879 5.9956 21.7893 6.27679L18.9125 7.43929C19.0515 6.84932 19.0552 6.23555 18.9234 5.64394C18.7915 5.05233 18.5275 4.49821 18.1512 4.02309C17.7748 3.54796 17.2959 3.16415 16.7501 2.90038C16.2044 2.63662 15.6061 2.49974 15 2.5ZM6.15533 8.51607C6.26337 8.25629 6.46927 8.04944 6.72854 7.94018C6.98781 7.83093 7.27966 7.82804 7.54104 7.93214L13.6625 10.4054C14.5205 10.7519 15.4795 10.7519 16.3375 10.4054L22.4589 7.93214C22.7203 7.82804 23.0121 7.83093 23.2714 7.94018C23.5307 8.04944 23.7366 8.25629 23.8446 8.51607C23.8975 8.64281 23.9247 8.77881 23.9245 8.91615C23.9244 9.05349 23.8969 9.18943 23.8438 9.31605C23.7906 9.44268 23.7127 9.55746 23.6148 9.65373C23.5168 9.75 23.4007 9.82582 23.2732 9.87679L19.6875 11.3232C19.3572 11.4568 19.0744 11.6862 18.8755 11.9818C18.6766 12.2775 18.5707 12.6258 18.5714 12.9821V17.2375C18.5712 17.5302 18.643 17.8184 18.7803 18.0768L22.0196 24.1679C22.1367 24.4136 22.1546 24.695 22.0694 24.9536C21.9842 25.2121 21.8025 25.4278 21.5622 25.5558C21.322 25.6837 21.0416 25.7141 20.7795 25.6405C20.5175 25.5669 20.2939 25.395 20.1553 25.1607L16.5768 18.4286C16.4246 18.1424 16.1975 17.9031 15.9198 17.7361C15.642 17.5692 15.324 17.481 15 17.481C14.6759 17.481 14.3579 17.5692 14.0802 17.7361C13.8024 17.9031 13.5753 18.1424 13.4232 18.4286L9.8464 25.1554C9.78132 25.2778 9.69278 25.3862 9.58581 25.4744C9.47884 25.5625 9.35556 25.6288 9.22298 25.6693C9.09041 25.7099 8.95115 25.7239 8.81316 25.7106C8.67516 25.6974 8.54113 25.657 8.41872 25.592C8.29631 25.5269 8.18792 25.4383 8.09973 25.3314C8.01154 25.2244 7.94528 25.1011 7.90473 24.9686C7.86419 24.836 7.85016 24.6967 7.86343 24.5587C7.87671 24.4207 7.91704 24.2867 7.98211 24.1643L11.2196 18.075C11.3567 17.8171 11.4284 17.5296 11.4285 17.2375V12.9804C11.4285 12.6247 11.3223 12.2771 11.1235 11.9821C10.9246 11.6872 10.6422 11.4584 10.3125 11.325L6.72676 9.875C6.59922 9.82403 6.4831 9.74821 6.38515 9.65194C6.2872 9.55568 6.20937 9.44089 6.15619 9.31427C6.10301 9.18764 6.07555 9.0517 6.0754 8.91436C6.07526 8.77702 6.10242 8.64281 6.15533 8.51607Z"
        fill="#A729F5"
      />
    </svg>
  </div>
);
