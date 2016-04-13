using System.Collections.Generic;

namespace AspNetCoreDeck.Services
{
    public class TodoService
    {
        public TodoService()
        {
            Items = new List<string>();
        }

        public List<string> Items { get; set; } 
    }
}
