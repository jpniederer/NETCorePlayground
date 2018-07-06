using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatAppWithSignalR.Models;

namespace ChatAppWithSignalR.Services
{
    public class MessageService : IMessageService
    {
        public Task<List<Message>> GetMessagesForChatRoomAsync(Guid roomId)
        {
            return Task.FromResult(new List<Message>());
        }
    }
}
