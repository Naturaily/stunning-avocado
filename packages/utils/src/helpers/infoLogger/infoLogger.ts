/* eslint-disable no-console */

import { __DEV__ } from '../../consts';

const stylesLog =
  'display: inline-block ; font-size: 14px ; font-weight: 500; border: 3px solid #e7900e ; border-radius: 4px ; padding: 6px ;';

/**
 * It logs a message to the console if the app is in development mode
 * @param {string} message - The message you want to log.
 */
export const infoLogger = (message: string) => {
  if (!__DEV__) {
    return undefined;
  }

  return console.info(`%c${message}`, stylesLog);
};
