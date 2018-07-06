using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatAppWithSignalR.Models;

namespace ChatAppWithSignalR.Services
{
    public interface IChatRoomService
    {
        Task<List<ChatRoom>> GetChatRoomsAsync();
    }
}
