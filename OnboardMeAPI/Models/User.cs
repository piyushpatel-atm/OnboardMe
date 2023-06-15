﻿namespace OnboaedMeAPI.Models
{
  
        public class User
        {
            public string FirstName { get; set; } = string.Empty;
            public string LastName { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
            public string Mobile { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
            public string UserName { get; set; } = string.Empty;
            public bool Blocked { get; set; } = false;
            public bool Active { get; set; } = true;
            public UserType UserType { get; set; }
            public string CreatedOn { get; set; }
            public bool FirstLogin { get; set; }=true;
        
    }
}
