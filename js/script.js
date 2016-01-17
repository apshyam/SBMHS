function requestData1() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].Temp1);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestData2() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].Temp2);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestData3() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].Temp3);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestData4() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].Temp4);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestPWMData1() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].PWM1);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestPWMData2() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].PWM2);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestPWMData3() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].PWM3);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function requestPWMData4() {
    var series = this.series[0];
    setInterval(function () {
                            $.ajax({
                            type: "GET",
                            url: '/SBMHS/php/temp.php',
                            success: function(point) {
                                td = $.parseJSON(point);
                                var x = (new Date()).getTime(), // current time
                                    y = parseInt(td[td.length - 1].PWM4);
                                    series.addPoint([x, y], true);
                                }
                            });
                        }, 1000);
}
function detailplot(){
    location.href = "detail.html"
}

/*function submit(){
    $.post( "",
    {
        "h1": $('#h1').val,
        "h2": $('#h2').val,
        "h3": $('#h3').val,
        "h4": $('#h4').val
    },
    function(data, status){
        alert('success');
    });
}*/

$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    $('#container1').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestData1
            }
        },
        title: {
            text: 'Temperature Sensor 1'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Temperature (in celsius)'
            },
            plotLines: [{
                value: 0,
                width: 0.5,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Temperature',
            data:  (function () {
                // generate an array of temperature
                var data = []
                    /*time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#PWM1').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestPWMData1
            }
        },
        title: {
            text: 'PWM 1'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'PWM'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'PWM',
            data:  (function () {
                // generate an array of temperature
                var data = []
                    /*time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#container2').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestData2
            }
        },
        title: {
            text: 'Temperature Sensor 2'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Temperature (in celsius)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Temperature',
            data:  (function () {
                // generate an array of temperature
                var data = []
                   /* time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#PWM2').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestPWMData2
            }
        },
        title: {
            text: 'PWM 2'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'PWM'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'PWM',
            data:  (function () {
                // generate an array of temperature
                var data = []
                   /* time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#container3').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestData3
            }
        },
        title: {
            text: 'Temperature Sensor 3'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Temperature (in celsius)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Temperature',
            data:  (function () {
                // generate an array of temperature
                var data = []
                   /* time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#PWM3').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestPWMData3
            }
        },
        title: {
            text: 'PWM 3'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'PWM'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'PWM',
            data:  (function () {
                // generate an array of temperature
                var data = []
                   /* time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#container4').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestData4
            }
        },
        title: {
            text: 'Temperature Sensor 4'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Temperature (in celsius)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Temperature',
            data:  (function () {
                // generate an array of temperature
                var data = []
                   /* time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
    $('#PWM4').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: requestPWMData4
            }
        },
        title: {
            text: 'PWM 4'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'PWM'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'PWM',
            data:  (function () {
                // generate an array of temperature
                var data = []
                   /* time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }*/
                return data;
            }())
        }]
    });
});
