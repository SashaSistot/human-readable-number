module.exports = function toReadable (number) {
  const unit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
	const tefirstTenns = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
	const tenns = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred',];;

	if (number >= 1000) return NaN;
	if (number === 0) return 'zero';
	if ((Math.floor((number%100)/10)) === 1) return `${hundreds[Math.floor(number/100)]} ${tefirstTenns[number%10]}`.trim().split('  ').join(' ');
	return `${hundreds[Math.floor(number/100)]} ${tenns[Math.floor((number%100)/10)]} ${unit[number%10]}`.trim().split('  ').join(' ');
}