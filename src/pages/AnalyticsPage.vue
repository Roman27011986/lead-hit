<template>
    <div class="hello" id="root">
       Analytics
    </div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
export default {
    name: 'AnalyticsPage',

    beforeCreate() {
        if (!localStorage.getItem('leadhit-site-id')) {
            this.$router.push({ name: "home" });
        }
    },

    mounted() {
        var root = am5.Root.new("root");
        root.setThemes([
            am5themes_Animated.new(root),
        ]);
        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {})
        );

        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        var xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                categoryField: "category",
                baseInterval: {
                    timeUnit: "day",
                    count: 1
                }
            })
        );

        xAxis.data.setAll([{
            category: "Research"
        }, {
            category: "Marketing"
        }, {
            category: "Sales"
            }]);

        var series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date"
            })
        );

        series.data.setAll([{
            category: "Research",
            value: 1000
        }, {
            category: "Marketing",
            value: 1200
        }, {
            category: "Sales",
            value: 850
        }]);

        
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
    width: 1200px;
    height: 300px;
    margin: auto;
}
</style>