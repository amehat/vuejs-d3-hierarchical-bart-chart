# vuejs-d3-hierarchical-bart-chart

Component "hierarchical bar chart" designed with D3 for Vue.JS

<img src="https://raw.githubusercontent.com/amehat/vuejs-d3-hierarchical-bart-chart/master/public/chart-1.png?sanitize=true&raw=true" />

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Example
```
    <h2>Chart 1</h2>
    <hierarchical-bar-chart
      selector=".paf"
    />
    <div class="paf"></div>

    <h2>Chart 2</h2>
    <hierarchical-bar-chart
      selector=".plop"
      :data="NiveauImpactDommage"
      BackgroundColor="green"
      :barLabelWidth="360"
    />
    <div class="plop"></div>

    <h2>Chart 3</h3>
    <hierarchical-bar-chart></<hierarchical-bar-chart>
```

### Options (Props)
- select tag or class for display chart
```
selector
```
- Change background color:
```
BackgroundColor
```
- space reserved for value labels (right):
```
valueLabelWidth
``` 
- height of one bar:
```
barHeight
```
- space reserved for bar labels:
```
barLabelWidth
```
- padding between bar and bar labels (left):
```
barLabelPadding
```
- space reserved for gridline labels:
```
gridLabelHeight
``` 
- space between start of grid and first bar:
```
gridChartOffset
```
- width of the bar with the max value:
```
maxBarWidth
```