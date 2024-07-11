import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexPlotOptions, ApexTheme, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';


  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | any;
    fill: ApexFill;
    grid: ApexGrid;
    tooltip: ApexTooltip | any;
    dataLabels: ApexDataLabels;
    theme: ApexTheme;
  };

  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Revenue',
        data: [80000, 60000, 40000, 88000, 40000, 10000, 54000]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: 'end',
          distributed: true,
          horizontal: false,
          columnWidth: '30%'
        }
      },
      xaxis: {
        categories: ['1 June', '2 June', '3 June', '4 June', '5 June', '6 June', '7 June']
      },
      yaxis: {
        categories: [0, 20000, 40000, 60000, 80000, 100000],
        labels: {
          formatter: function (val:any) {
            return val / 1000 + 'k';
          }
        },
        max: 100000,
        tickAmount: 5
      },
      fill: {
        colors: ['#2171b2']
      },
      grid: {
        borderColor: '#d6d8d9'
      },
      tooltip: {
        y: {
          formatter: function (val:any) {
            return val / 1000 + 'k';
          },
          title: {
            formatter: (seriesName:any, opts:any) => `Sales & Trends`
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      theme: {
        mode: 'light',
        palette: 'palette1',
        monochrome: {
          enabled: true,
          color: '#2171b2',
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      }
    };
  }

  ngOnInit(): void {
  }
}