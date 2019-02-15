import Vue from 'vue';
import HierarchicalBarChart from './HierarchicalBarChart.vue';

const Components = {
    HierarchicalBarChart,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
