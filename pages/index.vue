<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="mt-4 col-md-4 mt-md-0 ">
              <UserKpiComponent
                name="Yaw Graham"
                roll="Distributor"
                status="true"
                usercard="user-card-27"
              >
                <template #profile>
                  <img
                    src="../assets/img/team-1.jpg "
                    alt=""
                    class="user-profile mx-2"
                    style="width: 73px"
                  />
                </template>
              </UserKpiComponent>
            </div>
  
            <div class="mt-4 col-md-6 mt-md-0">
              <UserKpiComponent usercard="user-card-35" userdetails="true" />
            </div>
          </div>
  
          <div class="row mt-2">
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Overall Customer"
                value="53,000"
                description="<span
                  class='text-sm font-weight-bolder text-success'
                  >+55%</span> since yesterday"
                :icon="{
                  component: 'ni ni-money-coins',
                  background: 'bg-gradient-primary',
                  shape: 'rounded-circle',
                }"
              />
              
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Deposit Manager"
                value="2,300"
                description="<span
                  class='text-sm font-weight-bolder text-success'
                  >+3%</span> since last week"
                :icon="{
                  component: 'ni ni-world',
                  background: 'bg-gradient-danger',
                  shape: 'rounded-circle',
                }"
              />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Delevery agents"
                value="+3,462"
                description="<span
                  class='text-sm font-weight-bolder text-danger'
                  >-2%</span> since last quarter"
                :icon="{
                  component: 'ni ni-paper-diploma',
                  background: 'bg-gradient-success',
                  shape: 'rounded-circle',
                }"
              />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Complaints"
                value="430"
                description="<span
                  class='text-sm font-weight-bolder text-success'
                  >+5%</span> than last month"
                :icon="{
                  component: 'ni ni-cart',
                  background: 'bg-gradient-warning',
                  shape: 'rounded-circle',
                }"
              />
            </div>
            <div class="row">
              <div class="mt-4 col-md-6 mt-md-0">
                <gradient-line-chart
                  id="chart-line"
                  title="Overall Sales"
                  description="<i class='fa fa-arrow-up text-success'></i>
        <span class='font-weight-bold'>4% more</span> in 2021"
                  :chart="{
                    labels: [
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ],
                    datasets: [
                      {
                        label: 'Mobile Apps',
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      },
                    ],
                  }"
                />
              </div>
  
              <div class="col-md-6 mt-4 mt-md-0">
                <bar-chart
                  title="Overall Sales"
                  height="300"
                  :chart="{
                    labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
                    datasets: {
                      label: 'Sales by age',
                      data: [15, 20, 12, 60, 20, 15],
                    },
                  }"
                />
              </div>
  
              <div class="mt-4 row">
                <div class="col-lg-3 col-md-6 col-12 mt-3">
                  <line-chart
                    id="chart-widgets-1"
                    title="Sales"
                    title2="3kg | Steel"
                    :value="{
                      amount: 'GHs 90',
                      percentage: {
                        value: '+5% since last month',
                        color: 'success',
                      },
                    }"
                    :chart="{
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      datasets: {
                        label: 'Income',
                        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                      },
                    }"
                  />
                </div>
                <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                  <line-chart
                    id="chart-widgets-2"
                    title="Sales"
                    title2="3kg | Steel"
                    :value="{
                      amount: 'GHs 93',
                      percentage: {
                        value: '+6% since last month',
                        color: 'success',
                      },
                    }"
                    :chart="{
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      datasets: {
                        label: 'Income',
                        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                      },
                    }"
                  />
                </div>
                <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                  <line-chart
                    id="chart-widgets-3"
                    title="Sales"
                    title2="3kg | Steel"
                    :value="{
                      amount: 'GHs 93',
                      percentage: {
                        value: '+6% since last month',
                        color: 'success',
                      },
                    }"
                    :chart="{
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      datasets: {
                        label: 'Income',
                        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                      },
                    }"
                  />
                </div>
                <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                  <line-chart
                    id="chart-widgets-4"
                    title="Sales"
                    title2="3kg | Steel"
                    :value="{
                      amount: 'GHs 93',
                      percentage: {
                        value: '+6% since last month',
                        color: 'success',
                      },
                    }"
                    :chart="{
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      datasets: {
                        label: 'Income',
                        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                      },
                    }"
                  />
                </div>
                <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                  <line-chart
                    id="chart-widgets-5"
                    title="Sales"
                    title2="3kg | Steel"
                    :value="{
                      amount: 'GHs 93',
                      percentage: {
                        value: '+6% since last month',
                        color: 'success',
                      },
                    }"
                    :chart="{
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      datasets: {
                        label: 'Income',
                        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                      },
                    }"
                  />
                </div>
              </div>
              <div class="row">
                <OrderList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MiniStatisticsCard from "@/components/cards/MiniStatisticsCard.vue";
  import BarChart from "@/components/Charts/BarChart.vue";
  import GradientLineChart from "@/components/Charts/GradientLineChart.vue";
  import LineChart from "@/components/Charts/LineChart.vue";
  import OrderList from "@/components/OrderList.vue";
  import UserKpiComponent from "@/components/cards/UserKpiComponent.vue";
  export default {
    components: {
      MiniStatisticsCard,
      BarChart,
      GradientLineChart,
      LineChart,
      OrderList,
      UserKpiComponent,
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  