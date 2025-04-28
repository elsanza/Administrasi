var style_Pemukiman_2 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };

    // Konfigurasi style utama
    var labelText = "";
    var labelFont = "10px sans-serif";
    var bufferColor = "rgba(255,255,255,0.5)";
    var bufferWidth = 1;

    return [
        // Base layer transparan dengan efek mengkilap
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(179, 42, 42, 0.3)',
                width: 1.14,
                lineCap: 'butt',
                lineJoin: 'miter'
            }),
            fill: new ol.style.Fill({
                color: 'rgba(247, 110, 12, 0.2)'
            }),
            image: new ol.style.Circle({
                radius: 7,
                displacement: [0, 3],
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,0.4)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255,255,255,0.7)',
                    width: 1
                })
            }),
            text: new ol.style.Text({
                text: labelText,
                font: labelFont,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,0)' // Label transparan
                }),
                stroke: new ol.style.Stroke({
                    color: bufferColor,
                    width: bufferWidth
                }),
                placement: 'point'
            })
        }),
        
        // Layer tambahan untuk efek highlight
        new ol.style.Style({
            image: new ol.style.RegularShape({
                points: 4,
                radius: 4,
                angle: Math.PI/4,
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,0.3)'
                })
            })
        })
    ];
};
