
using OnboaedMeAPI.Repository;

namespace OnboaedMeAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            //DI
            builder.Services.AddScoped<IService,Service>();  
            builder.Services.AddScoped<IMailService,MailService>();

            //services cors
            builder.Services.AddCors(p => p.AddPolicy("OnboardCORS", builder =>
            {
                builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
            }));

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
          

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("OnboardCORS");
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}