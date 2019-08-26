import * as log from 'loglevel';
import Host from '@/lib/Host';

log.setLevel(Host.isDebugHost ? log.levels.TRACE : log.levels.INFO);

export default log;
