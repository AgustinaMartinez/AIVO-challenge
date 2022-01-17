const ChevronDown = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-down"
      width={15}
      height={15}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#050507"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default ChevronDown;
