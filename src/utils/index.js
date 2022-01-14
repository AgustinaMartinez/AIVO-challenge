export const buildOrderButtonTitle = (button, isTitleAsc) => {
  let title = '';

  if (button === 'Year') {
    title = `${button}`;
  } else {
    title = `${button} ${isTitleAsc ? 'A/z' : 'Z/a'}`;
  };

  return title;
};
