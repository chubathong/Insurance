using System;
using System.Collections.Generic;

#nullable disable

namespace project.Model
{
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string Rate { get; set; }
        public string Message { get; set; }
        public DateTime Dateofbirth { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime Date { get; set; }
    }
}
