import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';


   public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#999'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#999'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`
        }
      }
    }
  };
  public barChartLabels: string[] = ['1 June', '2 June', '3 June', '4 June', '5 June', '6 June', '7 June'];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [85000, 65000, 30000, 88000, 20000, 65000, 70000], label: 'Sales & Trends', backgroundColor: '#0d6efd' }
    ]
  };

  public totalSales = 12345;
  public totalEarnings = 132450;

  ngOnInit() {
    console.log('Component initialized');
    console.log('Bar Chart Data:', this.barChartData);
  }
}