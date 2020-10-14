import { CourseLesson } from './course-lesson.entity';
import { COURSELESSON_REPOSITORY } from '../../constants';

export const coursesLessonsProviders = [{
    provide: COURSELESSON_REPOSITORY,
    useValue: CourseLesson,
}];
