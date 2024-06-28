namespace Versta_test.Contracts
{
    public record GetOrdersResponse(List<OrderDto> orders);
    public record OrderDto(int id, 
        string sendersCity, 
        string sendersAddress, 
        string recipientsCity, 
        string recipientsAddress, 
        int loadWeight, 
        DateTime pickupDate, 
        DateTime CreatedAt);
}
