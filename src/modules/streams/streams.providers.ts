import { Stream } from './stream.entity';
import { STREAM_REPOSITORY } from '../../constants';

export const streamsProviders = [{
    provide: STREAM_REPOSITORY,
    useValue: Stream,
}];
