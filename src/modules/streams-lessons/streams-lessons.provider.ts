import { StreamLesson } from './stream-lesson.entity';
import { STREAMELESSON_REPOSITORY } from '../../constants';

export const streamsLessonsProviders = [{
    provide: STREAMELESSON_REPOSITORY,
    useValue: StreamLesson,
}];
