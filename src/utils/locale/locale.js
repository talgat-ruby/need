import localeData from './locale.json';

import { language } from '../../environment/app_environment';

export default key => [[language], ...key.split('.')]
						.reduce((obj, k) => obj[k], localeData);
