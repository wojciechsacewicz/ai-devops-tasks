const ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

function isValidIPv4(ipAddress) {
  return ipv4Regex.test(ipAddress);
}

if (require.main === module) {
  const examples = [
    '192.168.1.1',
    '0.0.0.0',
    '255.255.255.255',
    '256.100.50.25',
    '192.168.1',
    '192.168.001.1',
    'abc.def.ghi.jkl'
  ];

  examples.forEach(ipAddress => {
    console.log(`${ipAddress}: ${isValidIPv4(ipAddress)}`);
  });
}

module.exports = {
  isValidIPv4
};
