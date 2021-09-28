window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,  
        title:{
            text: "Company Revenue by Year"
        },
        axisY: {
            title: "Revenue in USD",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$"
        },
        data: [{
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 3289000 },
                { x: new Date(2001, 0), y: 3830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 },
                { x: new Date(2007, 0), y: 2000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2009, 0), y: 2506000 },
                { x: new Date(2010, 0), y: 2798000 },
                { x: new Date(2011, 0), y: 3386000 },
                { x: new Date(2012, 0), y: 6704000},
                { x: new Date(2013, 0), y: 6026000 },
                { x: new Date(2014, 0), y: 2394000 },
                { x: new Date(2015, 0), y: 1872000 },
                { x: new Date(2016, 0), y: 2140000 }
            ]
        }]
        });
    chart.render();
    
    }

    

    var options = {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
        chart: {
        height: 490,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Sales Overview',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();




      var options = {
        series: [76, 67, 61, 90],
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      title: {
        text: 'Growth Overview',
        align: 'left'
      },
      colors: ['#24695C', '#BA895D', '#24695C', '#BA895D'],
      labels: ['Total Order', 'Total Product', 'Quantity', 'Page views'],
      legend: {
        show: true,
        floating: true,
        fontSize: '15px',
        position: 'right',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
      };

      var chart = new ApexCharts(document.querySelector("#chart2"), options);
      chart.render();



      var options = {
        series: [{
        name: 'Net Profit',
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#24695c','transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart3"), options);
      chart.render();


      var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };

      var chart = new ApexCharts(document.querySelector("#chart4"), options);
      chart.render();
