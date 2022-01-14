import {
	DropdownHeaderStyled,
	DropdownItemStyled,
} from './dropdown.styled';

const Dropdown = props => {
	const {
		items,
		name,
		id,
		onChange,
		selectedIndex,
	} = props;
    
  return (
    <DropdownHeaderStyled name={name} id={id} onChange={onChange} selectedIndex={selectedIndex}>
			{(items && items.length > 0) && items.map(item => (
				<DropdownItemStyled id={item} key={item}>
					{item}
				</DropdownItemStyled>
			))}
		</DropdownHeaderStyled>
  );
};

export default Dropdown;
