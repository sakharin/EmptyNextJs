import { setConfig } from 'next/config';

import config from './next.config';

// To make sure you can use "next/config" within tests.
setConfig(config);
