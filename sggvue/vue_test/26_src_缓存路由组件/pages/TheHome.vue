<template>
    <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                  </li>
                  <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                  </li>
                </ul>
                <keep-alive include="TheNews">
                  <router-view></router-view>
                </keep-alive>
              </div>
            </div>
</template>

<script>
export default {
  name: "TheHome",
};
</script>