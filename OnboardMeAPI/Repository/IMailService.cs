using OnboaedMeAPI.Models;

namespace OnboaedMeAPI.Repository
{
    public interface IMailService
    {
        void SendMail(MailRequest mailRequest);
    }
}
