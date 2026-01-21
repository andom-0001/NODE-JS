const fs = require("fs");

// secure permissions: read/write only for owner
fs.writeFileSync(
  "secure.txt",
  "This is a secure file",
  { mode: 0o600 }   // owner read/write only
);

console.log("Secure file created");