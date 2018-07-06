using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatAppWithSignalR.Models;

namespace ChatAppWithSignalR.Services
{
    public interface IMessageService
    {
        Task<List<Message>> GetMessagesForChatRoomAsync(Guid roomId);
    }
}
