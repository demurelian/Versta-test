using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using Versta_test.Contracts;
using Versta_test.DataAccess;
using Versta_test.Models;

namespace Versta_test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly OrdersDbContext _dbContext;

        public OrdersController(OrdersDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateOrderRequest request, CancellationToken ct)
        {
            var order = new Order(request.SendersCity, request.SendersAddress, request.RecipientsCity, request.RecipientsAddress, request.LoadWeight, request.PickupDate);

            await _dbContext.Orders.AddAsync(order, ct);
            await _dbContext.SaveChangesAsync(ct);

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] GetOrdersRequest request, CancellationToken ct)
        {
            var ordersQuery = _dbContext.Orders
                .Where(n => string.IsNullOrWhiteSpace(request.Search) ||
                        n.SendersCity.ToLower().Contains(request.Search.ToLower()));

            Expression<Func<Order, object>> selectorKey = request.sortItem?.ToLower() switch
            {
                "date" => order => order.CreatedAt,
                "city" => order => order.SendersCity,
                _ => order => order.Id
            };

            ordersQuery = request.sortOrder == "desc"
                ? ordersQuery.OrderByDescending(selectorKey)
                : ordersQuery = ordersQuery.OrderBy(selectorKey);

            var orderDtos = await ordersQuery
                .Select(n => new OrderDto(
                            n.Id,
                            n.SendersCity,
                            n.SendersAddress,
                            n.RecipientsCity,
                            n.RecipientsAddress,
                            n.LoadWeight,
                            n.PickupDate,
                            n.CreatedAt))
                .ToListAsync(ct);

            return Ok(new GetOrdersResponse(orderDtos));
        }
    }
}
