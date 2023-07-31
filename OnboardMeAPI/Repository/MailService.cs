using Microsoft.Extensions.Configuration;
using OnboaedMeAPI.Models;
using System.Net.Mail;

namespace OnboaedMeAPI.Repository
{
    public class MailService : IMailService
    {
        private readonly IConfiguration _config;
        public MailService(IConfiguration iConfig)
        {
            _config = iConfig;
        }
      
        public void SendMail(MailRequest mailRequest)
        {
            if(mailRequest == null)
            {
                throw new Exception("Email null");
            }
            else
            {
                // Send registration confirmation email
                MailMessage message = new MailMessage();
                message.From = new MailAddress(_config.GetValue<string>("MailSetting:From"));
                message.To.Add(new MailAddress(mailRequest.ToEmail));
                message.Subject = mailRequest.Subject;
                message.Body = mailRequest.Body;
                SmtpClient client = new SmtpClient();
                client.Host = _config.GetValue<string>("MailSetting:Host");
                client.Port = _config.GetValue<int>("MailSetting:Port");
                client.EnableSsl = true;
                client.UseDefaultCredentials = false;
                client.Credentials = new System.Net.NetworkCredential(_config.GetValue<string>("MailSetting:From"),_config.GetValue<string>("MailSetting:Password"));
                client.Send(message);
               
            }
        }
    }
}
