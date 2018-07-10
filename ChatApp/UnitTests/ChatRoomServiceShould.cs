using System;
using Xunit;
using System.Threading.Tasks;
using ChatAppWithSignalR.Data;
using ChatAppWithSignalR.Models;
using ChatAppWithSignalR.Services;
using Microsoft.EntityFrameworkCore;

namespace UnitTests
{
    public class ChatRoomServiceShould
    {
        [Fact]
        public void AddNewChatRoom()
        {
            Assert.Equal(1, 1);
        }
    }
}
