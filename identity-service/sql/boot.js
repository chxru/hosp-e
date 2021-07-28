/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { exec } = require("child_process");

// sql file list, in order
const files = ["function.sql", "patients.sql"];

// exec sql
const main = async (file) => {
  return new Promise((resolve, reject) => {
    exec(
      `sh ${path.join(process.cwd(), "sql", "sql.sh")} hospe_is ${file}`,
      (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
          console.log(`exec error: ${error}`);
          resolve();
        } else {
          reject(error);
        }
      }
    );
  });
};

(async () => {
  for (const file of files) {
    try {
      await main(file);
    } catch (error) {
      console.error(error);
    }
  }
})();
