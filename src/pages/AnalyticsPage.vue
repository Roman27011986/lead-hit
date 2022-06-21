<template>
    <h1>Аналитика</h1>
    <section class="charts__section">
        <h2 class="charts__title">Аналитика по визитам</h2>
        <div id="root" class="charts__root"></div>
    </section>
</template>

<script>

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
    name: 'AnalyticsPage',

    beforeCreate() {
        if (!localStorage.getItem('leadhit-site-id')) {
            this.$router.push({ name: "home" });
        }
    },

    mounted() {
    
        const data = this.$store.state.date.map(e => ({
            date: Date.parse(e.date),
            value: e.visits
        }));

        const root = am5.Root.new("root");
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                wheelY: "zoomX",
                layout: root.verticalLayout,
                maxTooltipDistance: 1
            })
        );

        // Create Y-axis
        const yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                extraTooltipPrecision: 1,
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        // Create X-Axis
        const xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(root, {})
            })
        );

        xAxis.get("dateFormats")["day"] = "MM/dd";
        xAxis.get("periodChangeDateFormats")["day"] = "MMMM";

        // Create series
        function createSeries(name, field) {
            const series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: field,
                    valueXField: "date",
                    tooltip: am5.Tooltip.new(root, {})
                })
            );

            series.bullets.push(function () {
                return am5.Bullet.new(root, {
                    sprite: am5.Circle.new(root, {
                        radius: 6,
                        fill: series.get("fill")
                    })
                });
            });

            series.strokes.template.set("strokeWidth", 2);

            series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
            series.data.setAll(data);
        }

        createSeries("Series", "value");

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "zoomXY",
            xAxis: xAxis
        }));

        xAxis.set("tooltip", am5.Tooltip.new(root, {
            themeTags: ["axis"]
        }));

        yAxis.set("tooltip", am5.Tooltip.new(root, {
            themeTags: ["axis"]
        }));
        
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.charts__root {
    width: 100%;
    height: 60vh;
    margin: auto;
}
.charts__section {
    border: 2px solid red;
    border-radius: 14px;
   background-color: beige;
}

.charts__title {
    color: white;
}
</style>