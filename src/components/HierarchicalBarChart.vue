<template>
  <div class="hierarchical-bar-chart">
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  props: {
    selector: {
      type: String,
      default: '.hierarchical-bar-chart'
    },
    valueLabelWidth: {
      type: Number,
      default: 40,
    },
    barHeight: {
      type: Number,
      default: 20,
    },
    barLabelWidth: {
      type: Number,
      default: 100,
    },
    barLabelPadding: {
      type: Number,
      default: 5,
    },
    gridLabelHeight: {
      type: Number,
      default: 18,
    },
    gridChartOffset: {
      type: Number,
      default: 3,
    },
    maxBarWidth: {
      type: Number,
      default: 420,
    },
    labelY: {
      type: String,
      default: 'Name',
    },
    ValueBar: {
      default: 'ValueBar',
    },
    BackgroundColor: {
      type: String,
      default: ''
    },
    data: {
      default: function() {
        return [
          {
            Name:  "Canada", 
            ValueBar: "33.9", 
            "Average Life Expectancy": "80.7", 
            "Area (1000 sq mi)": "3854.085",
            "Continent": "America",
          }, {
            Name:  "US",
            ValueBar: "308.3",
            "Average Life Expectancy": "78.2",
            "Area (1000 sq mi)": "3784.191",
            "Continent": "America",
          }, 
          {
            Name:  "Germany",
            ValueBar: "82.3",
            "Average Life Expectancy": "79.4",
            "Area (1000 sq mi)": "137.847",
            "Continent": "Europe",
          }, 
          { 
            Name:  "Russia",
            ValueBar: "141.9",
            "Average Life Expectancy": "65.5",
            "Area (1000 sq mi)": "6601.668",
            "Continent": "Europe",
          }, 
          {
            Name:  "Mexico",
            ValueBar: "108.4",
            "Average Life Expectancy": "76.06",
            "Area (1000 sq mi)": "758.449",
            "Continent": "America",
          }, 
          {
            Name:  "Brazil",
            ValueBar: "193.3",
            "Average Life Expectancy": "71.99",
            "Area (1000 sq mi)": "3287.612",
            "Continent": "America",
          }, 
          { 
            Name:  "Spain",
            ValueBar: "46.9",
            "Average Life Expectancy": "80.9",
            "Area (1000 sq mi)": "195.365",
            "Continent": "Europe",
          }, 
          { 
            Name:  "France",
            ValueBar: "65.4",
            "Average Life Expectancy": "80.98",
            "Area (1000 sq mi)": "244.339",
            "Continent": "Europe",
          },
          { 
            Name:  "China",
            ValueBar: "1339",
            "Average Life Expectancy": "73",
            "Area (1000 sq mi)": "3705.407",
            "Continent": "Asia",
          },
          { 
            Name:  "Australia",
            ValueBar: "22.4",
            "Average Life Expectancy": "81.2",
            "Area (1000 sq mi)": "2969.907",
            "Continent": "Australia",
          },
          { 
            Name:  "UK",
            ValueBar: "62",
            "Average Life Expectancy": "79.4",
            "Area (1000 sq mi)": "93.800",
            "Continent": "Europe",
          },
          { 
            Name:  "Italy",
            ValueBar: "60.3",
            "Average Life Expectancy": "80.5",
            "Area (1000 sq mi)": "116.346",
            "Continent": "Europe",
          },
          { 
            Name:  "India",
            ValueBar: "1184",
            "Average Life Expectancy": "64.7",
            "Area (1000 sq mi)": "1236.085",
            "Continent": "Asia",
          },
          { 
            Name:  "Japan",
            ValueBar: "127.4",
            "Average Life Expectancy": "82.6",
            "Area (1000 sq mi)": "145.920",
            "Continent": "Asia",
          },
          { 
            Name:  "Iceland",
            ValueBar: "0.3",
            "Average Life Expectancy": "81.8",
            "Area (1000 sq mi)": "40.000",
            "Continent": "Europe",
          },
          { 
            Name:  "Portugal",
            ValueBar: "10.6",
            "Average Life Expectancy": "78.1",
            "Area (1000 sq mi)": "35.560",
            "Continent": "Europe",
          },
          { 
            Name:  "South Africa",
            ValueBar: "50",
            "Average Life Expectancy": "49.3",
            "Area (1000 sq mi)": "471.445",
            "Continent": "Africa",
          },
          { 
            Name:  "Egypt",
            ValueBar: "78.9",
            "Average Life Expectancy": "71.3",
            "Area (1000 sq mi)": "387.000",
            "Continent": "Africa",
          },
          { 
            Name:  "Sweden",
            ValueBar: "9.3",
            "Average Life Expectancy": "80.9",
            "Area (1000 sq mi)": "170.410",
            "Continent": "Europe",
          } 
        ]
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    const valueLabelWidth = this.valueLabelWidth; // space reserved for value labels (right)
    const barHeight = this.barHeight; // height of one bar
    const barLabelWidth = this.barLabelWidth; // space reserved for bar labels
    const barLabelPadding = this.barLabelPadding; // padding between bar and bar labels (left)
    const gridLabelHeight = this.gridLabelHeight; // space reserved for gridline labels
    const gridChartOffset = this.gridChartOffset; // space between start of grid and first bar
    const maxBarWidth = this.maxBarWidth; // width of the bar with the max value
    const self = this;

    const barLabel = d => d[self.labelY];
    const barValue = d => parseFloat(d[self.ValueBar]);

    const yScale = d3
      .scale
      .ordinal()
      .domain(d3.range(0, this.data.length))
      .rangeBands([0, this.data.length * barHeight]);
    const y = function(d, i) { return yScale(i); };
    const yText = function(d, i) { return y(d, i) + yScale.rangeBand() / 2; };
    const x = d3
      .scale
      .linear()
      .domain([0, d3.max(this.data, barValue)])
      .range([0, maxBarWidth]);
    const width = maxBarWidth + barLabelWidth + valueLabelWidth;
    const height = gridLabelHeight + gridChartOffset + this.data.length * barHeight;

    let chart = d3
      //.select("body")
      .select(this.selector)
      .append("svg")
      .attr('width', width)
      .attr('height', height)
      .style('background-color', (this.BackgroundColor ? `${this.BackgroundColor}` : ''));

    // grid line labels
    let gridContainer = chart.append('g')
      .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')'); 
    gridContainer.selectAll("text").data(x.ticks(10)).enter().append("text")
      .attr("x", x)
      .attr("dy", -3)
      .attr("text-anchor", "middle")
      .text(String);

    // vertical grid lines
    gridContainer.selectAll("line").data(x.ticks(10)).enter().append("line")
      .attr("x1", x)
      .attr("x2", x)
      .attr("y1", 0)
      .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
      .style("stroke", "#ccc");

    // bar labels
    let labelsContainer = chart.append('g')
      .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
    labelsContainer.selectAll('text').data(this.data).enter().append('text')
      .attr('y', yText)
      .attr('stroke', 'none')
      .attr('fill', 'black')
      .attr("dy", ".35em") // vertical-align: middle
      .attr('text-anchor', 'end')
      .text(barLabel);
    let barsContainer = chart.append('g')
      .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
    barsContainer.selectAll("rect").data(this.data).enter().append("rect")
      .attr('y', y)
      .attr('height', yScale.rangeBand())
      .attr('width', function(d) { return x(barValue(d)); })
      .attr('stroke', 'white')
      .attr('fill', 'steelblue');

    // bar value labels
    barsContainer.selectAll("text").data(this.data).enter().append("text")
      .attr("x", function(d) { return x(barValue(d)); })
      .attr("y", yText)
      .attr("dx", 3) // padding-left
      .attr("dy", ".35em") // vertical-align: middle
      .attr("text-anchor", "start") // text-align: right
      .attr("fill", "black")
      .attr("stroke", "none")
      .text(function(d) { return d3.round(barValue(d), 2); });

    // start line
    barsContainer.append("line")
      .attr("y1", -gridChartOffset)
      .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
      .style("stroke", "#000");
  }
};
</script>
