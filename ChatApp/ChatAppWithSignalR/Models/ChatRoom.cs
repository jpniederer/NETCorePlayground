using System;
using System.ComponentModel.DataAnnotations;

namespace ChatAppWithSignalR.Models
{
    public class ChatRoom
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}