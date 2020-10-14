import { Course } from './course.entity';
import { COURSE_REPOSITORY } from '../../constants';

export const coursesProviders = [{
    provide: COURSE_REPOSITORY,
    useValue: Course,
}];
