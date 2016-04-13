using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreDeck.Services;
using Microsoft.AspNet.Mvc;

namespace AspNetCoreDeck.Controllers
{
    [Route("todo")]
    public class TodoController : Controller
    {
        private readonly TodoService _todoService;

        public TodoController(TodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpPost]
        public void Post([FromBody] string item)
        {
            _todoService.Items.Add(item);
        }

        [HttpDelete]
        public void Delete(int index)
        {
            _todoService.Items.RemoveAt(index);
        }

        [HttpGet]
        public List<string> Get()
        {
            return _todoService.Items;
        } 
    }
}
