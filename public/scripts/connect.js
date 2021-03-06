window.onload = connect;

function connect() {

    cast.receiver.logger.setLevelValue(0);

    console.log('Starting Receiver Manager');

    window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

    window.castReceiverManager.onReady = function (event) {
        console.log('Received Ready event: ' + JSON.stringify(event.data));
        window.castReceiverManager.setApplicationState('Application status is ready...');
    };

    window.messageBus = window.castReceiverManager.getCastMessageBus(
        'urn:x-cast:com.google.cast.chromecast.signage'
    );
    window.messageBus.onMessage = function (event) {

        console.log(`Received browser data from: ${event.senderId}`);

        const json = event.data;
        const data = JSON.parse(json);

        displayLayout(data.layout);

        const response = JSON.stringify({
            requestId: data.requestId,
            message: "Data received"
        });
        window.messageBus.send(event.senderId, response);
    };

    window.castReceiverManager.start({ statusText: 'Application is starting' });
}
