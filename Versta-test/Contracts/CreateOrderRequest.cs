namespace Versta_test.Contracts
{
    public record CreateOrderRequest (string SendersCity, 
        string SendersAddress, 
        string RecipientsCity, 
        string RecipientsAddress, 
        int LoadWeight, 
        DateTime PickupDate);
}
