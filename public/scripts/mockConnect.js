data = {
    layout: {
        type: 'layout', // Optional
        direction: 'horizontal',

        children: [
            {
                url: 'https://www.google.com/maps/embed/v1/directions?origin=Krugstra%C3%9Fe%2033%2C%20N%C3%BCrnberg%2C%20Deutschland&destination=place_id:ChIJE4D-EY7-oUcRQYa5m_o4OGM&key=AIzaSyDB8U1SItFItg4XbsTSUPoiygARl5UkUFc'
            },
            {
                direction: 'vertical',
                children: [
                    {
                        size: 0.7,
                        url: 'https://www.meteoblue.com/de/wetter/widget/three?geoloc=detect&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image'
                    },
                    {
                        size: 0.3
                    }
                ]
            }
        ]
    }
};

displayLayout(data.layout);
