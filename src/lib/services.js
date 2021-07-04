const capitalFirstLetter = (e) => {
	let a = e.target.value;
	a = a.replace(/[0-9]/g, '');
	a = `${a.substr(0, 1).toUpperCase()}${a.slice(1)}`;
	return a;
};

export { capitalFirstLetter };