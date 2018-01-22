module.exports = function (controller) {

    controller.middleware.ingest.use(function(bot, message, res, next) {

        console.log("Ingest: ", message)
        next()
    
    });

	controller.middleware.receive.use(function (bot, message, next) {
        console.log("Received a message ", message)
        next()
	})

	controller.middleware.capture.use(function (bot, message, convo, next) {

		console.log("Capture middleware running, message is ", message)

        next()
    })

    // Get Training Sprint video url for current user and inject into message
    
    controller.middleware.send.use(function(bot, message, next) {

        console.log("Send middleware, with message ", message)
        
        next()

    })

    // controller.middleware.format.use(function(bot, message, platform_message, next) {
    
    //     console.log("Format send middleware ", message)
    //     console.log("Platform message is ", platform_message)
    
    //     if (message.video) {
    //         console.log("Custom field found")
    //         platform_message.text = 'Replace this for custom stuff'
    //         next()
    //     } else {
    //         next()
    //     }
    // });

}