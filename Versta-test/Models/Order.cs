namespace Versta_test.Models
{
    public class Order
    {
        public Order(string sendersCity, string sendersAddress, string recipientsCity, string recipientsAddress, int loadWeight, DateTime pickupDate)
        {
            SendersCity = sendersCity;
            SendersAddress = sendersAddress;
            RecipientsCity = recipientsCity;
            RecipientsAddress = recipientsAddress;
            LoadWeight = loadWeight;
            PickupDate = pickupDate;
            CreatedAt = DateTime.Now;
        }

        public int Id { get; init; }
        public string SendersCity { get; init; }
        public string SendersAddress { get; init; }
        public string RecipientsCity { get; init; }
        public string RecipientsAddress { get; init; }
        /// <summary> Integer returning the weight of the load in grams </summary>
        public int LoadWeight { get; init; }
        public DateTime PickupDate { get; init; }
        public DateTime CreatedAt { get; init; }
    }
}
