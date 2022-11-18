import 'dotenv/config';

import application from './application';
import { PORT } from './shared/constants/app.constants';

 
((): void => {
  application.listen(PORT, (): boolean =>
    process.stdout.write(`Server running at port http://localhost:${PORT}\n`)
  );
})();
