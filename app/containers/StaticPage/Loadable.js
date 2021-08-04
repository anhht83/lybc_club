/**
 *
 * Asynchronously loads the component for StaticPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
