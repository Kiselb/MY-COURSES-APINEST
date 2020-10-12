import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseProvider } from './database.provider';

describe('Database', () => {
  let provider: typeof DatabaseProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...DatabaseProvider],
    }).compile();

    provider = DatabaseProvider;
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
