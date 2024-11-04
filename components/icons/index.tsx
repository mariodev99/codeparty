export const Add = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Back = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12H19M5 12L11 18M5 12L11 6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Searchsvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HomeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 21 21"
      fill="none"
      stroke="#939393"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M1.5 10.5L10.5 1.5L19.5 10.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8.5V16.5C3.5 17.0523 3.94772 17.5 4.5 17.5H7.5C8.05228 17.5 8.5 17.0523 8.5 16.5V12.5C8.5 11.9477 8.94772 11.5 9.5 11.5H11.5C12.0523 11.5 12.5 11.9477 12.5 12.5V16.5C12.5 17.0523 12.9477 17.5 13.5 17.5H16.5C17.0523 17.5 17.5 17.0523 17.5 16.5V8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// INTERACTIONS
export const Like = ({ isLiked }: { isLiked: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      fill={isLiked ? "#faff5b" : "none"}
      stroke={isLiked ? "#fbe03c" : "currentColor"}
    >
      <path
        d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      />
    </svg>
  );
};

export const Comment = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 21 21"
      fill="none"
      stroke="#939393"
    >
      <path
        d="M9 9V9.0075M6 9V9.0075M12 9V9.0075M2.25 15.0001L3.225 12.0751C2.38233 10.8288 2.0775 9.35287 2.36716 7.92179C2.65683 6.4907 3.5213 5.20181 4.79983 4.29476C6.07835 3.38772 7.68394 2.92423 9.31807 2.99049C10.9522 3.05675 12.5036 3.64823 13.684 4.65498C14.8643 5.66172 15.5932 7.01522 15.735 8.4638C15.8769 9.91238 15.4222 11.3575 14.4554 12.5304C13.4886 13.7033 12.0755 14.5243 10.4788 14.8406C8.8822 15.1569 7.21065 14.947 5.775 14.2501L2.25 15.0001Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 1)"
      />
    </svg>
  );
};

export const Save = ({ isSave }: { isSave: boolean }) => {
  return (
    <svg
      height="24"
      viewBox="0 0 21 21"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      stroke="#939393"
      fill={isSave ? "#fff" : "#292929"}
    >
      <path
        d="m1.5.5h6c.55228475 0 1 .44771525 1 1v12l-4-4-4 4v-12c0-.55228475.44771525-1 1-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(6 4)"
      />
    </svg>
  );
};

export const CommonSave = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 21 21"
      fill="none"
      stroke="#939393"
      strokeWidth={"1.5"}
      {...props}
    >
      <path
        d="M7.5 4.5H13.5C14.0523 4.5 14.5 4.94772 14.5 5.5V17.5L10.5 13.5L6.5 17.5V5.5C6.5 4.94772 6.94772 4.5 7.5 4.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Photo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M12 5H12.01M1 12L5 7.99995C5.45606 7.56111 5.97339 7.33008 6.5 7.33008C7.02661 7.33008 7.54394 7.56111 8 7.99995L13 13M11 11L12 9.99995C12.4561 9.56111 12.9734 9.33008 13.5 9.33008C14.0266 9.33008 14.5439 9.56111 15 9.99995L17 12M4 1H14C15.6569 1 17 2.34315 17 4V14C17 15.6569 15.6569 17 14 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Plus = () => (
  <svg
    height="24"
    viewBox="0 0 21 21"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5.5 10.5h10" />
      <path d="m10.5 5.5v10" />
    </g>
  </svg>
);

export const PlusRounded = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="50"
    viewBox="0 0 51 50"
    fill="none"
  >
    <circle cx="25.5" cy="25" r="25" fill="#5ED1FF" />
    <path
      d="M17.375 25H34.875"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.125 16.25V33.75"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Exit = (props) => (
  <svg
    height="21"
    viewBox="0 0 21 21"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#939393"
    strokeWidth="1.5"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(-1 0 0 1 18 3)"
    >
      <path d="m10.595 10.5 2.905-3-2.905-3" />
      <path d="m13.5 7.5h-9" />
      <path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c.0005616 1.1043502.8956499 1.9996898 2 2.0005615l8 .0022461" />
    </g>
  </svg>
);

export const User = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 21 21"
      fill="none"
      stroke="#939393"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5V5.5C13.5 3.84315 12.1569 2.5 10.5 2.5C8.84315 2.5 7.5 3.84315 7.5 5.5V7.5C7.5 9.15685 8.84315 10.5 10.5 10.5ZM10.5 10.5C13.8137 10.5 17.5 12.5854 17.5 15.7718V16.5C17.5 17.0523 17.0523 17.5 16.5 17.5H4.5C3.94772 17.5 3.5 17.0523 3.5 16.5V15.7718C3.5 12.5854 7.18629 10.5 10.5 10.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Settings = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Options = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Upload = () => {
  return (
    <svg
      height="24"
      viewBox="0 0 21 21"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path d="m11.5 4.5-3.978-4-4.022 4" />
        <path d="m7.522.521v11.979" />
        <path d="m.5 9v4.5c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5" />
      </g>
    </svg>
  );
};

export const Cross = () => {
  return (
    <svg
      height="16"
      viewBox="0 0 21 21"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m10.5 10.5-10-10z" />
        <path d="m10.5.5-10 10" />
      </g>
    </svg>
  );
};

export const Message = () => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" transform="translate(2 3)">
        <path
          d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m13.5 5.5h-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4.49884033 6.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z"
          fill="currentColor"
        />
        <path
          d="m13.5 9.5h-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const Chat = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 9H16M8 13H14M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Trash = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
        stroke="#D43434"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Edit = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.5 5.5L16.5 9.5M4.5 13.5L8.5 17.5M3 19.0001H7L17.5 8.50006C18.0304 7.96963 18.3284 7.2502 18.3284 6.50006C18.3284 5.74991 18.0304 5.03049 17.5 4.50006C16.9696 3.96962 16.2501 3.67163 15.5 3.67163C14.7499 3.67163 14.0304 3.96962 13.5 4.50006L3 15.0001V19.0001ZM21 15V19H13L17 15H21Z"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
