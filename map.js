map:
    {
        link: null,
        baloons: false,
        mapid: 'YMapsID',
        mapsize: function()
        {
            app.reso();

            $('#'+this.mapid).height( app.resolution.b );
        },
        setCoord: function( coords ) {
            document.getElementById("longitude").value = coords[0];
            document.getElementById("latitude").value = coords[1];
        },
        setAddress: function( coords )
        {
            var objects = ymaps.geocode( coords );
        },
        getBaloon: function( coord ) {
            return new ymaps.Placemark( coord, {}, {
                draggable: true,
                balloonLayout: ymaps.templateLayoutFactory.createClass(
                    '<div class="white-baloon"><div class="white-baloon__content">' +
                        '<form class="form"><table class="table-place"><col width="25"><col width="290"><col width="20"><col width="120">' +
                        '<tr><th colspan="4">Местоположение:</th></tr>' +
                        '<tr><td><img src="images/ico/addr.png" alt=""/></td><td><input type="text" id="map-address" value=""/></td>' +
                        '<td></td><td><a href="" onclick="app.Step(\'2\');return false" class="submit submit-40">Далее</a></td></tr>' +
                        '</table></form>' +
                        '</div></div>'
                )
            });
        },
        mark: function( coords, number, baloon, address, content, link )
        {
            var myPlacemark = new ymaps.Placemark( coords, {
                balloonContentBody: [
                    '<h4>Объект № ' + number + '</h4>',
                    '<div class="addr-cover"><span class="address">' + address + '</span></div>',
                    content,
                    '<div class="wbaloon-bottom">',
                    '<a href="' + link + '" class="pseudo-link">Подробнее</a>',
                    '</div>'
                ].join('')
            }, {
                iconImageHref: 'images/baloons/baloon-' + baloon + '.png',
                iconImageSize: [25, 31],
                iconImageOffset: [-14, -16]
            });

            app.map.link.geoObjects.add( myPlacemark );
           // myPlacemark.balloon.open();
        },
        draw: function()
        {
            ymaps.ready(function () {
                app.map.link = new ymaps.Map( app.map.mapid, {
                    center: [45.09471716593029, 39.01589900000001],
                    zoom: 13,
                    controls: []
                });
                app.map.link.controls.add('zoomControl', { right: 10, top: 10 });

                app.map.mark( [45.09471716593039, 39.01589900000001], 123, 1, 'ул.Северная, 317', '<p class="gc g-red">Возводится незаконно или с нарушениями!</p>', '#1' );
                app.map.mark( [45.068293275201,38.959477879107], 1372, 2, 'ул.Северная, 317', '<p class="gc g-orange">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.08991419319915,38.9796784494629], 1372, 3, 'ул.Северная, 317', '<p class="gc g-yellow">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.08845498170661,38.95564585668945], 1372, 4, 'ул.Северная, 317', '<p class="gc g-green-light">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.07641505493305,39.048857984375005], 1372, 6, 'ул.Северная, 317', '<p class="gc g-red">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.12273653017989,38.98929148657226], 1372, 5, 'ул.Северная, 317', '<p class="gc g-orange">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.08310421848759,38.98997813208007], 1372, 1, 'ул.Северная, 317', '<p class="gc g-red">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.06388595525946,39.02465373022461], 1372, 2, 'ул.Северная, 317', '<p class="gc g-red">Возводится незаконно или с нарушениями!</p>', '#2' );
                app.map.mark( [45.03568202453815,39.0020330520461], 1372, 3, 'ул.Северная, 317', '<p class="gc g-green">Возводится незаконно или с нарушениями!</p>', '#2' );

                app.map.link.events.add('click', function (e) {
                    if( absolute_step === 1 )
                    {
                        if( typeof dragBalloon !=='undefined' && dragBalloon !== null )
                        {
                            app.map.link.geoObjects.remove( dragBalloon );
                        }

                        dragBalloon = app.map.getBaloon( e.get('coordPosition') );

                        app.map.link.geoObjects.add( dragBalloon ).events.add('dragend', function(e) {
                            var object = e.get('target');
                            var coords = object.geometry.getCoordinates();
                            object.properties.set('balloonContent', coords);
                        });

                        dragBalloon.balloon.open();
                        //app.map.link.setCenter( e.get('coordPosition'), app.map.zoom );
                    }
                });

            });
        },
        init: function( baloons )
        {
            if( typeof ymaps !== 'undefined' )
            {
                this.baloons = baloons ;
                this.mapsize();
                this.draw();
            }
        }
    },