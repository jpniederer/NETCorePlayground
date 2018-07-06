using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatAppWithSignalR.Models;

namespace ChatAppWithSignalR.Services
{
    public class ChatRoomService : IChatRoomService
    {
        public Task<List<ChatRoom>> GetChatRoomsAsync()
        {
            return Task.FromResult(new List<ChatRoom>());
        }
    }
}