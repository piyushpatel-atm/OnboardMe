using Dapper;
using OnboaedMeAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace OnboaedMeAPI.Repository
{
    public class Service : IService
    {
        private readonly IMailService _mailService;
        private readonly string DbConnection;
        public Service(IMailService mailService,IConfiguration configuration)
        {
            _mailService = mailService;
            DbConnection = configuration["ConnectionStrings:OnBoardContext"]?? "";

        }
    
        //register new user at our portal
        public void RegisterNewUser(User UserData)
        {
            using( var _connection = new SqlConnection(DbConnection)){
                if (UserData == null)
                {
                    throw new Exception("Data is null");
                }
                else
                {

                    UserData.CreatedOn = DateTime.Now.ToString("yyyy-MM-dd");
                    UserData.UserName = UserData.FirstName+"."+UserData.LastName+"_"+UserData.MobileNo.Substring(9-3);
                    UserData.Password= UserData.FirstName+"#"+ UserData.CreatedOn.Substring(9-3)+"onb";
                    MailRequest mailRequest = new MailRequest();
                    mailRequest.ToEmail = UserData.Email;
                    mailRequest.Subject = "Registration Confirmation";
                    mailRequest.Body = $"Hi {UserData.FirstName+" "+ UserData.LastName},\nThank you for registring in our website." +
                        $"\nyour first login credentails are \nUserName: {UserData.UserName} and Password: {UserData.Password}." +
                        $"\n\n Thanks & Regards" +
                        $"\n\n Team OnBoarding ";
                    _connection.Execute("registernewuser", new { userName=UserData.UserName,password=UserData.Password,firstName = UserData.FirstName, lastName = UserData.LastName, email = UserData.Email, mobileNo = UserData.MobileNo, createdOn = UserData.CreatedOn,userType = UserType.Employee }, commandType: CommandType.StoredProcedure);
                    _mailService.SendMail(mailRequest);

                }
            }
        }
        //login method to login user
        public bool LoginUser(User UserData)
        {
            using (var _connection = new SqlConnection())
            {
                if (UserData == null)
                {
                    return false;
                }
                else
                {
                    var value = _connection.Query("", new { username = UserData.UserName, password = UserData.Password }, commandType: CommandType.StoredProcedure);
                    if (value == null)
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }

        }

        public bool IsEmailAvailable(string email)
        {
            var result = false;

            using (var _connection = new SqlConnection(DbConnection))
            {
                result = _connection.ExecuteScalar<bool>("IsEmailAvailable", new { email },commandType:CommandType.StoredProcedure);
            }

            return !result;
        }
    }
}
