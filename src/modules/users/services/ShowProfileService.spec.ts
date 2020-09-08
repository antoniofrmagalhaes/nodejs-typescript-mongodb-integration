import TestUsersRepository from '../infra/mongoose/repositories/test/TestUsersRepository';
import ShowProfileService from './ShowProfileService';
import AppError from '../../../errors/AppError';

let testUsersRepository: TestUsersRepository;
let showProfileService: ShowProfileService;

describe('ShowProfileService', () => {
  beforeEach(() => {
    testUsersRepository = new TestUsersRepository();
    showProfileService = new ShowProfileService(testUsersRepository);
  });

  it("should show user's profile", async () => {
    const user = await testUsersRepository.create({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '1234567890',
    });
    const profile = await showProfileService.execute({ user_id: user.id });
    expect(profile.id).toBe(user.id);
  });

  it('should not show an unexisting profile', async () => {
    await testUsersRepository.create({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '1234567890',
    });
    await expect(
      showProfileService.execute({ user_id: 'unexisting' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
