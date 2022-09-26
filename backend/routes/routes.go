package routes

import (
	"login-page-example/controllers"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func Setup(app *fiber.App) {
	api := app.Group("/api", logger.New())
	api.Post("/login", controllers.Login)
	api.Get("/user", controllers.User)
	api.Post("/logout", controllers.Logout)
}
