namespace OnboaedMeAPI.Models
{
    public class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName {get;set; }
        public string LastName {get;set; }
        public string MobileNo { get;set; }
        public string CreatedOn { get; set; }
        public UserType  UserType { get; set; }
    }
}
