using System.Data;
using System.Data.SqlClient;

namespace OnboaedMeAPI.Context
{
    public class DbContext
    {
        private readonly IConfiguration _configuration;
        public DbContext(IConfiguration config)
        {
            if (config != null)
            {
                this._configuration = config;
            }
            else
            {
                throw new ArgumentNullException("config");
            }
        }
        public IDbConnection connection => new SqlConnection(_configuration.GetConnectionString("OnBoardContext"));



    }
}
