const MenuIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#050507"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default MenuIcon;
