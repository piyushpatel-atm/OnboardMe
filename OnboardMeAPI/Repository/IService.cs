using OnboaedMeAPI.Models;

namespace OnboaedMeAPI.Repository
{
    public interface IService
    {
        void RegisterNewUser(User UserData);
        bool LoginUser(User UserData);
        bool IsEmailAvailable(string email);
    }
}
