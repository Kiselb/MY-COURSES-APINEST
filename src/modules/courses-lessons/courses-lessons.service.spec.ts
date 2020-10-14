import { Test, TestingModule } from '@nestjs/testing';
import { CoursesLessonsService } from './courses-lessons.service';

describe('CoursesLessonsService', () => {
  let service: CoursesLessonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesLessonsService],
    }).compile();

    service = module.get<CoursesLessonsService>(CoursesLessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
