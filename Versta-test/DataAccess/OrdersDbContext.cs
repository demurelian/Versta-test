using Microsoft.EntityFrameworkCore;
using Versta_test.Models;

namespace Versta_test.DataAccess
{
    public class OrdersDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public OrdersDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Order> Orders => Set<Order>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = _configuration.GetConnectionString("Database");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
