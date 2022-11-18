const { join } = require('path');
const { execSync } = require('child_process');
const dotenv = require('dotenv');

dotenv.config();

const directoryToWork = `${join(__dirname, '..')}`;

execSync(`cp ${directoryToWork}/.env.example ${directoryToWork}/.env`);

const { MONGODB_USER, MONGODB_PASS } = process.env;

try {
  execSync(
    `docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=${MONGODB_USER} -e MONGO_INITDB_ROOT_PASSWORD=${MONGODB_PASS} -d mongo`
  );
} catch (error) {
  process.stdout.write(JSON.stringify(error));
  process.exit(1);
}
