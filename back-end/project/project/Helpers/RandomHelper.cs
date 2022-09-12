using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Helpers
{
    public class RandomHelper
    {
        public static string CreateCode()
        {
            var guid = Guid.NewGuid().ToString().Replace("-", "");
            return guid;
        }
    }
}
