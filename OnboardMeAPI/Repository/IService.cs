using OnboaedMeAPI.Models;

namespace OnboaedMeAPI.Repository
{
    public interface IService
    {
        void RegisterNewUser(User UserData);
        Boolean LoginUser(User UserData);
    }
}
