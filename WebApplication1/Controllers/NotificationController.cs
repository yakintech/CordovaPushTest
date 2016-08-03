using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class NotificationController : Controller
    {
        public ActionResult SemdNotification()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SemdNotification(MessageModel)
        {
            return View();
        }
    }
}