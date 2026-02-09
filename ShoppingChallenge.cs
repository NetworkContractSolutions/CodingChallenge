// Ncontracts Code Challenge
//
//
// Please take a look at the code below.
// Even though the program runs and generates correct result, we consider the code to be bad.
// For example, if we want to expand the Christmas discount to January or if we want to introduce a first responder discount, the code can get really messy.
// We ask you to refactor the code so that it's easier to apply new changes to it.
// Once done, please send me a link to your gists.


using System;
using System.Collections.Generic;

namespace CodingChallenge.Shopping
{
    class Program
    {
        static void Main(string[] args)
        {
            var program = new Program();
            
            program.ChristmasShoppingAtTheGroceryStore();
            program.BuyingFood();
        }
        
        void ChristmasShoppingAtTheGroceryStore()
        {
            var carts = new List<CartItem>
            {
                new CartItem {ProductName = "Lights", Category = "Christmas", Price = 5.99m, Quantity = 10},
                new CartItem {ProductName = "Tree", Category = "Christmas", Price = 169m, Quantity = 1},
                new CartItem {ProductName = "Ornaments", Category = "Christmas", Price = 8m, Quantity = 15},
            };
            
            var calculator = new GroceryStoreCheckoutCalculator();
            var total = calculator.Calculate(carts, new DateTime(2020,11,30));
            Console.WriteLine(total);
            
            var totalAfterChristmas = calculator.Calculate(carts, new DateTime(2020,12,30));
            Console.WriteLine(totalAfterChristmas);
        }
        
        void BuyingFood()
        {
            var carts = new List<CartItem>
            {
                new CartItem {ProductName = "Apple", Category = "Food", Price = 3.27m, Weight = 0.79m},
                new CartItem {ProductName = "Scallop", Category = "Food", Price = 18m, Weight = 1.5m},
                new CartItem {ProductName = "Salad", Category = "Food", Price = 6.99m, Quantity = 1},
                new CartItem {ProductName = "Ground Beef", Category = "Food", Price = 7.99m, Weight = 1.5m},
                new CartItem {ProductName = "Red Wine", Category = "Food", Price = 25.99m, Quantity = 1}
            };
            
            var calculator = new GroceryStoreCheckoutCalculator();
            var total = calculator.Calculate(carts, new DateTime(2020,11,30));
            Console.WriteLine(total);
            
            var seniorHourTotal = calculator.Calculate(carts, new DateTime(2020,11,30, 7, 11, 0));
            Console.WriteLine(seniorHourTotal);
        }
        
    }
    
    public class GroceryStoreCheckoutCalculator
    {
        public decimal Calculate(List<CartItem> carts, DateTime checkOutDate)
        {
            decimal itemTotal = 0m;
            
            foreach (var item in carts)
            {
                if (item.Category == "Christmas")
                {
                    if (checkOutDate.Month == 12)
                    {
                        if (checkOutDate.Day < 15)
                        {
                            itemTotal += (item.Quantity * (item.Price - item.Price * (20m / 100m)));    
                        }else if (checkOutDate.Day <= 25)
                        {
                            itemTotal += (item.Quantity * (item.Price - item.Price * (60m / 100m)));
                        }else
                        {
                            itemTotal += (item.Quantity * (item.Price - item.Price * (90m / 100m)));
                        }
                    }
                    else
                    {
                        itemTotal += item.Quantity * item.Price;
                    }
                }
                else if (item.Category == "Food")
                {
                    if (item.Weight != 0)
                    {
                        if (checkOutDate.TimeOfDay.Hours > 6 && checkOutDate.TimeOfDay.Hours <= 8)
                        {
                            //senior discount
                            itemTotal += item.Weight * item.Price * 0.9m;
                        }
                        else
                        {
                            itemTotal += item.Weight * item.Price;
                        }
                    }
                    else
                    {
                        if (checkOutDate.TimeOfDay.Hours > 6 && checkOutDate.TimeOfDay.Hours <= 8)
                        {
                            //senior discount
                            itemTotal += item.Quantity * item.Price * 0.9m;
                        }
                        else
                        {
                            itemTotal += item.Quantity * item.Price;
                        }
                    }
                }
                else if (item.Category == "")
                {
                    //oh no! this should not happen!
                }
                else
                {
                    itemTotal += item.Price * item.Quantity;
                }
            }
            return itemTotal;
        }
    }

    public class CartItem
    {
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Category { get; set; }
        
        public decimal Weight { get; set; }
    }
}