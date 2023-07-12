using Dapper;
using OnboaedMeAPI.Models;
using System.Data;

namespace OnboaedMeAPI.Repository
{
    public class Service : IService
    {
        private readonly IDbConnection _connection;
        //constructor
        public Service(IDbConnection connection)
        {
            if(connection != null)
            {
                this._connection = connection;
            }
        }

        //register new user at our portal
        public void RegisterNewUser(User UserData)
        {
            if(UserData == null)
            {
                throw new Exception("Data is null");
            }
            else
            {
                _connection.Execute("", new { username=UserData.UserName,password=UserData.Password }, commandType: CommandType.StoredProcedure);

            }
        }
        //login method to login user
        public Boolean LoginUser(User UserData)
        {
            if(UserData ==null)
            {
                return false;
            }
            else
            {
                var value = _connection.Query("", new { username = UserData.UserName, password = UserData.Password }, commandType: CommandType.StoredProcedure);
                if(value == null)
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
}
