/**
 * Glob the Pattern Lab specific pieces we don't want to gunk up the design
 * system with
 */

import importAll from '../../tools/webpack/import-all';

// PL meta
import '../../source/_meta/_00-head.twig';
import '../../source/_meta/_01-foot.twig';

// Watch all demo folders in source
const demoSystem = importAll(
  require.context('../../source/_patterns', true, /demo$/)
);

// Watch all files in the source/_data folder
importAll(require.context('../../source/_data/', false, /\.(yml|json)$/));

export default demoSystem;
