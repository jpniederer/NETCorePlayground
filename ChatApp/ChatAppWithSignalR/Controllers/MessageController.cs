using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ChatAppWithSignalR.Models;
using ChatAppWithSignalR.Services;
using Microsoft.AspNetCore.Cors;

namespace ChatAppWithSignalR.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    public class MessageController : Controller
    {
        private readonly IMessageService _messageService;

        public MessageController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var messagesForRoom = await _messageService.GetMessagesAsync();

            return Ok(messagesForRoom);
        }

        // GET api/values/5
        [HttpGet("{roomId}")]
        public async Task<IActionResult> Get(Guid roomId)
        {
            if (roomId == Guid.Empty)
            {
                return NotFound();
            }

            var messagesForRoom = await _messageService.GetMessagesForChatRoomAsync(roomId);

            return Ok(messagesForRoom);
        }

        // POST api/values
        [HttpPost]
        public async void Post([FromBody] Message message)
        {
            await _messageService.AddMessageToRoomAsync(message.RoomId, message);
        }
    }
}