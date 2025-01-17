/**
 * 地图1
 */
(function($){
    /**
     styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#071e34'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#071e34'
                    }
                }]
     */

    function getParams(){
        return {
            bmap: {
                center: [116.234741,40.228396],
                zoom: 13,
                roam: false,
                inRange: {
                    color: ['#0494e1', '#004098']
                },
                //style: 'http://172.25.9.48:5001/service/Vector/vector_darkBlue_cgcs2000/styles/style.json',
                styleJson: 'http://172.25.9.48:5001/service/Vector/vector_darkBlue_cgcs2000/styles/style.json',
                mapStyle: {
                    styleJson: 'http://172.25.9.48:5001/service/Vector/vector_darkBlue_cgcs2000/styles/style.json',
                   /* styleJson: [{
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'land',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'poi',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#071e34'
                        }
                    }]*/
                }
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: [],
                //silent: true,
                lineStyle: {
                    color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 1
                },
                progressiveThreshold: 500,
                progressive: 200
            }]
        }
    }

    function createChartBox(){
        var _chart = echarts.init(document.getElementById('chartMapBox'));
        _chart.setOption(getParams());
    }

    $(function(){
        //setTimeout(function(){
        //    createChartBox();
        //}, 200);
    });
})(jQuery);


(function($){
    var _styleJson = {
        "version": 8,
        "name": "矢量切片",
        "center": [116.42681628619019, 39.94036874366848],
        "zoom": 7.0,
        "metadata": {
            "mapcenter": [12960573.903660702, 4857280.607862053],
            "mapbounds": [12848045.941054775, 4785208.09337574, 13080951.408954192, 5021077.556238505],
            "indexbounds": [-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892],
            "mapscale": 4.32681874234574e-7,
            "topscale": 3.380327143205317e-9,
            "epsgcode": 3857
        },
        "sources": {
            "矢量切片": {
                "tiles": ["http://172.25.9.48:5001/service/Vector/vector_standard_cgcs2000/tiles/{z}/{x}/{y}.mvt"],
                "type": "vector",
                "bounds": [115.41596039919284, 39.44217063839093, 117.50818581488339, 41.059199868348127]
            }
        },
        "sprite": "http://172.25.9.48:5001/service/Vector/vector_darkBlue_cgcs2000/sprites/sprite",
        "glyphs": "http://172.25.9.48:5001/service/Vector/vector_darkBlue_cgcs2000/fonts/{fontstack}/{range}.pbf",
        "layers": [{
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgba(0,25,55,1.00)"
            }
        }, {
            "id": "区县行政区域@2019图片引擎#1",
            "source": "矢量切片",
            "source-layer": "区界@2019图片引擎",
            "metadata": {
                "layer:caption": "区界"
            },
            "minzoom": 0.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(8,25,55,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "区县行政区域@2019图片引擎#1_outline_0",
            "source": "矢量切片",
            "source-layer": "区界@2019图片引擎",
            "metadata": {
                "layer:caption": "区界"
            },
            "minzoom": 0.0,
            "maxzoom": 21.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(20,40,90,1.00)",
                "line-width": 0.38,
                "line-dasharray": [23.0, 8.0, 2.0, 8.0]
            }
        }, {
            "id": "市行政区界限@2019图片引擎#13_outline_0",
            "source": "矢量切片",
            "source-layer": "市界@2019图片引擎",
            "metadata": {
                "layer:caption": "市界"
            },
            "minzoom": 0.0,
            "maxzoom": 21.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(20,50,100,1.00)",
                "line-width": 1.89,
                "line-dasharray": [4.6, 1.4, 0.2, 1.4, 0.2, 1.4]
            }
        }, {
            "id": "景区_100@2019图片引擎#1",
            "source": "矢量切片",
            "source-layer": "景区@2019图片引擎",
            "metadata": {
                "layer:caption": "景区"
            },
            "minzoom": 9.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(5,50,70,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "公园#18",
            "source": "矢量切片",
            "source-layer": "公园@2019图片引擎",
            "metadata": {
                "layer:caption": "公园"
            },
            "minzoom": 11.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(5,50,70,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "自然村面#2",
            "source": "矢量切片",
            "source-layer": "自然村面@2019图片引擎",
            "metadata": {
                "layer:caption": "自然村面"
            },
            "minzoom": 13.0,
            "maxzoom": 15.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(15,30,60,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "不同区域",
            "source": "矢量切片",
            "source-layer": "有名区域@2019图片引擎",
            "metadata": {
                "layer:caption": "有名区域"
            },
            "minzoom": 14.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(15,30,60,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "街区#4",
            "source": "矢量切片",
            "source-layer": "街区@2019图片引擎",
            "metadata": {
                "layer:caption": "街区"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(15,30,60,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "露天体育场@2019图片引擎",
            "source": "矢量切片",
            "source-layer": "露天体育场@2019图片引擎",
            "metadata": {
                "layer:caption": "露天体育场"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(5,85,115,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "水系综合后_2@2019图片引擎",
            "source": "矢量切片",
            "source-layer": "主要水系@2019图片引擎",
            "metadata": {
                "layer:caption": "主要水系"
            },
            "minzoom": 10.0,
            "maxzoom": 14.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(20,45,90,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "水系综合前#1",
            "source": "矢量切片",
            "source-layer": "水系@2019图片引擎",
            "metadata": {
                "layer:caption": "水系"
            },
            "minzoom": 14.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(20,45,90,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "辅路_20@2019图片引擎_0",
            "source": "矢量切片",
            "source-layer": "支路@2019图片引擎",
            "metadata": {
                "layer:caption": "支路"
            },
            "minzoom": 14.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(15,50,100,1.00)",
                "line-width": 1.51
            }
        }, {
            "id": "次干道_0",
            "source": "矢量切片",
            "source-layer": "次干道@2019图片引擎",
            "metadata": {
                "layer:caption": "次干道"
            },
            "minzoom": 13.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(15,50,100,1.00)",
                "line-width": 1.51
            }
        }, {
            "id": "县道_0",
            "source": "矢量切片",
            "source-layer": "县道@2019图片引擎",
            "metadata": {
                "layer:caption": "县道"
            },
            "minzoom": 13.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(15,50,100,1.00)",
                "line-width": 1.51
            }
        }, {
            "id": "省道_50_0",
            "source": "矢量切片",
            "source-layer": "省道@2019图片引擎",
            "metadata": {
                "layer:caption": "省道"
            },
            "minzoom": 11.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(15,50,100,1.00)",
                "line-width": 1.51
            }
        }, {
            "id": "主干道_50_0",
            "source": "矢量切片",
            "source-layer": "主干道@2019图片引擎",
            "metadata": {
                "layer:caption": "主干道"
            },
            "minzoom": 13.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(15,50,100,1.00)",
                "line-width": 1.51
            }
        }, {
            "id": "环路_50#1_0",
            "source": "矢量切片",
            "source-layer": "环路@2019图片引擎",
            "metadata": {
                "layer:caption": "环路"
            },
            "minzoom": 8.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(20,90,165,1.00)",
                "line-width": 2.27
            }
        }, {
            "id": "国道_50_0",
            "source": "矢量切片",
            "source-layer": "国道@2019图片引擎",
            "metadata": {
                "layer:caption": "国道"
            },
            "minzoom": 9.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(20,90,165,1.00)",
                "line-width": 2.27
            }
        }, {
            "id": "城际公路_20#2_0",
            "source": "矢量切片",
            "source-layer": "高速公路@2019图片引擎",
            "metadata": {
                "layer:caption": "高速公路"
            },
            "minzoom": 8.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(20,90,165,1.00)",
                "line-width": 2.27
            }
        }, {
            "id": "立交桥中线_0",
            "source": "矢量切片",
            "source-layer": "立交桥中线@2019图片引擎",
            "metadata": {
                "layer:caption": "立交桥中线"
            },
            "minzoom": 13.0,
            "maxzoom": 15.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(20,90,165,1.00)",
                "line-width": 2.27
            }
        }, {
            "id": "道路面#1_其他道路",
            "source": "矢量切片",
            "source-layer": "道路面@2019图片引擎",
            "metadata": {
                "layer:caption": "道路面"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(15,50,100,1.00)",
                "fill-antialias": true
            },
            "filter": ["all", ["==", "$type", "Polygon"],
                ["==", "备注", "其他道路"]
            ]
        }, {
            "id": "道路面#1_等级道路",
            "source": "矢量切片",
            "source-layer": "道路面@2019图片引擎",
            "metadata": {
                "layer:caption": "道路面"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(20,70,150,1.00)",
                "fill-antialias": true
            },
            "filter": ["all", ["==", "$type", "Polygon"],
                ["==", "备注", "等级道路"]
            ]
        }, {
            "id": "主干铁路线_5@2019图片引擎_0",
            "source": "矢量切片",
            "source-layer": "主干铁路线@2019图片引擎",
            "metadata": {
                "layer:caption": "主干铁路线"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(25,55,90,1.00)",
                "line-width": 3.02
            }
        }, {
            "id": "主干铁路线_5@2019图片引擎_1",
            "source": "矢量切片",
            "source-layer": "主干铁路线@2019图片引擎",
            "metadata": null,
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "line",
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgba(45,85,135,1.00)",
                "line-width": 0.76,
                "line-dasharray": [10.0, 15.0]
            }
        }, {
            "id": "轨道交通面层#2",
            "source": "矢量切片",
            "source-layer": "轨道交通面层@2019图片引擎",
            "metadata": {
                "layer:caption": "轨道交通面"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "fill",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(80,120,200,1.00)",
                "fill-antialias": true
            }
        }, {
            "id": "轨道交通@2019图片引擎#1",
            "source": "矢量切片",
            "source-layer": "轨道交通@2019图片引擎",
            "metadata": {
                "layer:caption": "轨道交通"
            },
            "minzoom": 11.0,
            "maxzoom": 21.0,
            "type": "line",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 1.89,
                "line-color": "rgba(99,36,35,1.00)"
            }
        },{
            "id": "楼房",
            "source": "矢量切片",
            "source-layer": "楼房@2019图片引擎",
            "metadata": {
                "layer:caption": "楼房"
            },
            "minzoom": 15.0,
            "maxzoom": 21.0,
            "type": "fill-extrusion",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "rgba(15,60,120,1.00)",
                "fill-extrusion-height": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    15,
                    0,
                    15.05,
                    [
                        "get",
                        "房屋高度"
                    ]
                ],
                "fill-extrusion-opacity": 0.40
            }
        }, {
            "id": "平房",
            "source": "矢量切片",
            "source-layer": "平房@2019图片引擎",
            "metadata": {
                "layer:caption": "平房"
            },
            "minzoom": 16.0,
            "maxzoom": 21.0,
            "type": "fill-extrusion",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "rgba(15,60,120,1.00)",
                "fill-extrusion-height": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    16,
                    0,
                    16.05,
                    3
                ],
                "fill-extrusion-opacity": 0.40
            }
        },  {
            "id":"highflag",
            "type":"symbol",
            "source":"矢量切片",
            "source-layer":"highflag"
        },
            {
                "id": "轨道交通#15",
                "source": "矢量切片",
                "source-layer": "轨道交通@2019图片引擎",
                "metadata": {
                    "layer:caption": "轨道交通名称"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 10.16,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Bold"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "symbol-spacing": 1889.76,
                    "text-max-angle": 60,
                    "text-anchor": "top-left"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "全部道路中心线_1#1",
                "source": "矢量切片",
                "source-layer": "高速公路@2019图片引擎_filter2DBA9241",
                "metadata": {
                    "layer:caption": "高速公路名称"
                },
                "minzoom": 11.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "symbol-spacing": 1889.76,
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "全部道路中心线_1",
                "source": "矢量切片",
                "source-layer": "环路@2019图片引擎_filterF1D41172",
                "metadata": {
                    "layer:caption": "环路名称"
                },
                "minzoom": 11.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "symbol-spacing": 1889.76,
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "全部道路中心线_1#2",
                "source": "矢量切片",
                "source-layer": "国道@2019图片引擎",
                "metadata": {
                    "layer:caption": "国道名称"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "symbol-spacing": 1889.76,
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "全部道路中心线_1#5",
                "source": "矢量切片",
                "source-layer": "省道@2019图片引擎_filter6546239",
                "metadata": {
                    "layer:caption": "省道名称"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "symbol-spacing": 1889.76,
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "全部道路中心线_1#6",
                "source": "矢量切片",
                "source-layer": "县道@2019图片引擎_filterB297755",
                "metadata": {
                    "layer:caption": "县道名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "text-max-angle": 60,
                    "text-anchor": "top-left"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "全部道路中心线_1#7",
                "source": "矢量切片",
                "source-layer": "主干道@2019图片引擎_filter7F53A864",
                "metadata": {
                    "layer:caption": "主干道名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "次干道#1",
                "source": "矢量切片",
                "source-layer": "次干道@2019图片引擎",
                "metadata": {
                    "layer:caption": "次干道名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "支路#1",
                "source": "矢量切片",
                "source-layer": "支路@2019图片引擎_filterCF7EDF00",
                "metadata": {
                    "layer:caption": "支路名称"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 10.17,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-rotation-alignment": "map",
                    "icon-rotation-alignment": "map",
                    "text-keep-upright": true,
                    "symbol-placement": "line",
                    "symbol-spacing": 1889.76,
                    "text-max-angle": 60,
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(149,179,215,1.00)"
                },
                "filter": ["all", ["==", "$type", "LineString"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "区名@2019图片引擎#1",
                "source": "矢量切片",
                "source-layer": "区名@2019图片引擎",
                "metadata": {
                    "layer:caption": "区名"
                },
                "minzoom": 8.0,
                "maxzoom": 12.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.18,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Bold"],
                    "text-justify": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "市名政府驻地#21",
                "source": "矢量切片",
                "source-layer": "市政府驻地@2019图片引擎_filterB00024A9",
                "metadata": {
                    "layer:caption": "市政府名称"
                },
                "minzoom": 10.0,
                "maxzoom": 13.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "icon-image": "marker_318_6_7E756A",
                    "icon-size": 1,
                    "icon-rotation-alignment": "viewport",
                    "text-field": "{市政府}",
                    "text-size": 12.21,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left"
                },
                "paint": {
                    "icon-translate": [-1, 0],
                    "icon-translate-anchor": "map",
                    "text-translate": [6.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "市政府"],
                    ["!=", "市政府", ""]
                ]
            }, {
                "id": "市名政府驻地#1",
                "source": "矢量切片",
                "source-layer": "市政府驻地@2019图片引擎",
                "metadata": {
                    "layer:caption": "市政府市委名称"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "icon-image": "marker_318_6_7E756A",
                    "icon-size": 1,
                    "icon-rotation-alignment": "viewport",
                    "text-field": "{市政府}",
                    "text-size": 13.21,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Bold"],
                    "text-justify": "left"
                },
                "paint": {
                    "icon-translate": [-1, 0],
                    "icon-translate-anchor": "map",
                    "text-translate": [6.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "市政府"],
                    ["!=", "市政府", ""]
                ]
            }, {
                "id": "地片名",
                "source": "矢量切片",
                "source-layer": "地片名@2019图片引擎_filterBC2A10A8",
                "metadata": {
                    "layer:caption": "天安门"
                },
                "minzoom": 11.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "名称"],
                    ["!=", "名称", ""]
                ]
            }, {
                "id": "区政府驻地#17",
                "source": "矢量切片",
                "source-layer": "区政府驻地@2019图片引擎",
                "metadata": {
                    "layer:caption": "区政府名称"
                },
                "minzoom": 12.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{全称}",
                    "text-size": 12.21,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "全称"],
                    ["!=", "全称", ""]
                ]
            }, {
                "id": "乡镇驻地#21",
                "source": "矢量切片",
                "source-layer": "乡镇驻地@2019图片引擎",
                "metadata": {
                    "layer:caption": "乡镇名称"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "地片名#2",
                "source": "矢量切片",
                "source-layer": "地片名@2019图片引擎_filterBB2630C6",
                "metadata": {
                    "layer:caption": "地片名"
                },
                "minzoom": 12.0,
                "maxzoom": 14.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(165,165,165,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "名称"],
                    ["!=", "名称", ""]
                ]
            }, {
                "id": "自然村点#19",
                "source": "矢量切片",
                "source-layer": "自然村点@2019图片引擎_filterBB2630C6",
                "metadata": {
                    "layer:caption": "自然村名称"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 10.17,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "公园#10",
                "source": "矢量切片",
                "source-layer": "公园_ip@2019图片引擎_filterC589F7D3",
                "metadata": {
                    "layer:caption": "公园名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 12.21,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "top-left"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "景区",
                "source": "矢量切片",
                "source-layer": "景区_ip@2019图片引擎",
                "metadata": {
                    "layer:caption": "景区名称"
                },
                "minzoom": 10.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, -0.0],
                    "text-color": "rgba(84,141,212,1.00)"
                },
                "filter": ["all", ["has", "名称"],
                    ["!=", "名称", ""]
                ]
            }, {
                "id": "道路附属设施_0",
                "source": "矢量切片",
                "source-layer": "人行天桥地下通道@2019图片引擎",
                "metadata": {
                    "layer:caption": "道路附属设施线"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "line",
                "layout": {
                    "visibility": "visible",
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(15,50,100,1.00)",
                    "line-width": 1.51
                }
            }, {
                "id": "飞机场#23",
                "source": "矢量切片",
                "source-layer": "飞机场@2019图片引擎",
                "metadata": {
                    "layer:caption": "飞机场注记"
                },
                "minzoom": 11.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "icon-image": "marker_109_4_008000",
                    "icon-size": 1,
                    "icon-rotation-alignment": "viewport",
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "bottom"
                },
                "paint": {
                    "text-translate": [0.0, -9.0],
                    "text-color": "rgba(165,165,165,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "火车站@2019图片引擎#13",
                "source": "矢量切片",
                "source-layer": "火车站@2019图片引擎_filter182FE50E",
                "metadata": {
                    "layer:caption": "火车站名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(238,236,225,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "桥梁#1",
                "source": "矢量切片",
                "source-layer": "桥梁@2019图片引擎_filter2A9F8068",
                "metadata": {
                    "layer:caption": "桥梁"
                },
                "minzoom": 13.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "地铁站轻轨站#13",
                "source": "矢量切片",
                "source-layer": "地铁站轻轨站@2019图片引擎",
                "metadata": {
                    "layer:caption": "地铁站轻轨站"
                },
                "minzoom": 15.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "icon-image": "marker_13_3_6C674E",
                    "icon-size": 1,
                    "icon-rotation-alignment": "viewport",
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "top-left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "地铁站轻轨站出入口#4",
                "source": "矢量切片",
                "source-layer": "地铁站轻轨站出入口@2019图片引擎",
                "metadata": {
                    "layer:caption": "地铁站轻轨站出入口"
                },
                "minzoom": 17.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{备注}",
                    "text-size": 9.6,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Arial Bold"],
                    "text-justify": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(255,255,255,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "备注"],
                    ["!=", "备注", ""]
                ]
            }, {
                "id": "交通枢纽#11",
                "source": "矢量切片",
                "source-layer": "交通枢纽@2019图片引擎",
                "metadata": {
                    "layer:caption": "交通枢纽"
                },
                "minzoom": 15.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "left"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(165,165,165,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "突出房屋点#7",
                "source": "矢量切片",
                "source-layer": "标志性建筑@2019图片引擎_filter80DED67A",
                "metadata": {
                    "layer:caption": "标志性建筑名称"
                },
                "minzoom": 15.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{标准名称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "标准名称"],
                    ["!=", "标准名称", ""]
                ]
            }, {
                "id": "A级景点#17",
                "source": "矢量切片",
                "source-layer": "A级景点@2019图片引擎poi",
                "metadata": {
                    "layer:caption": "A级景点名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "其他景点@2019图片引擎poi",
                "source": "矢量切片",
                "source-layer": "其他景点@2019图片引擎poi",
                "metadata": {
                    "layer:caption": "其他景点名称"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "酒店宾馆#15",
                "source": "矢量切片",
                "source-layer": "酒店宾馆@2019图片引擎poi_filter80DED67A",
                "metadata": {
                    "layer:caption": "酒店宾馆名称"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "高教教育#15",
                "source": "矢量切片",
                "source-layer": "高校@2019图片引擎poi_filterBB2630C6",
                "metadata": {
                    "layer:caption": "高校名称"
                },
                "minzoom": 14.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "高校详细#1",
                "source": "矢量切片",
                "source-layer": "景区高校内部建筑@2019图片引擎poi_filter80DED67A",
                "metadata": {
                    "layer:caption": "景区高校内部建筑"
                },
                "minzoom": 17.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 10.17,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "医疗机构#15",
                "source": "矢量切片",
                "source-layer": "医疗相关@2019图片引擎poi_filterBB2630C6",
                "metadata": {
                    "layer:caption": "医疗机构名称"
                },
                "minzoom": 15.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "国家部委#13",
                "source": "矢量切片",
                "source-layer": "政府机构@2019图片引擎poi_filterBB2630C6",
                "metadata": {
                    "layer:caption": "政府机构名称"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "事业单位",
                "source": "矢量切片",
                "source-layer": "企事业单位@2019图片引擎poi_filter80DED67A",
                "metadata": {
                    "layer:caption": "企事业单位"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "博物艺术美术馆",
                "source": "矢量切片",
                "source-layer": "文化相关@2019图片引擎poi",
                "metadata": {
                    "layer:caption": "文化相关"
                },
                "minzoom": 16.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "购物相关",
                "source": "矢量切片",
                "source-layer": "购物相关@2019图片引擎poi",
                "metadata": {
                    "layer:caption": "购物"
                },
                "minzoom": 17.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "公安相关",
                "source": "矢量切片",
                "source-layer": "公安相关@2019图片引擎poi",
                "metadata": {
                    "layer:caption": "公安机关"
                },
                "minzoom": 17.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            }, {
                "id": "餐饮相关",
                "source": "矢量切片",
                "source-layer": "餐饮相关@2019图片引擎poi_filter80DED67A",
                "metadata": {
                    "layer:caption": "餐饮"
                },
                "minzoom": 17.0,
                "maxzoom": 21.0,
                "type": "symbol",
                "layout": {
                    "visibility": "visible",
                    "symbol-placement": "point",
                    "text-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-field": "{简称}",
                    "text-size": 11.19,
                    "text-rotate": 360.0,
                    "text-letter-spacing": 0,
                    "text-rotation-alignment": "viewport",
                    "text-font": ["Microsoft YaHei Regular"],
                    "text-justify": "left",
                    "text-anchor": "center"
                },
                "paint": {
                    "text-translate": [0.0, 0.0],
                    "text-color": "rgba(191,191,191,1.00)"
                },
                "filter": ["all", ["==", "$type", "Point"],
                    ["has", "简称"],
                    ["!=", "简称", ""]
                ]
            },{
                "id":"drawLevel",
                "type":"symbol",
                "source":"矢量切片",
                "source-layer":"satellite"
            },{
                "id":"dl1_flag",
                "type":"symbol",
                "source":"矢量切片",
                "source-layer":"placename:2"
            }]
    };

    function createChartMap(){
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFvcmV5IiwiYSI6ImNqNWhrenIwcDFvbXUyd3I2bTJxYzZ4em8ifQ.KHZIehQuWW9AsMaGtATdwA'; // 设置MapBox访问令牌
        var map = new mapboxgl.Map({
            container: 'chartMapBox',
            //style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            //style: 'http://172.25.9.48:5001/service/Vector/vector_darkBlue_cgcs2000/styles/style.json', // stylesheet location
            style: _styleJson, // stylesheet location
            center: [116.317153, 40.066835], // starting position [lng, lat]
            attributionControl: false,
            zoom: 12 // starting zoom
        });

        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    }

    $(function(){
        setTimeout(function(){
            createChartMap();
        }, 200);
    });

})(jQuery);
