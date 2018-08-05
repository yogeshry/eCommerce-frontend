<template>
  <v-container>
    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <IndexCard title="Total Users" :text="indexDetail.userSize" :src="'/static/images1.png'"></IndexCard>
          <IndexCard title="Total Products" :text="indexDetail.productSize" :src="'/static/box-icon1.png'"></IndexCard>
          <IndexCard title="Total Ordered Products" :text="indexDetail.orderedProductSize" :src="'/static/box-icon1.png'"></IndexCard>
          <IndexCard title="Total Orders" :text="indexDetail.userOrderSize" :src="'/static/images2.png'"></IndexCard>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import IndexCard from './IndexCard'
  export default {
    name: 'Index',
    components: {IndexCard},
    computed: {
      ...mapGetters({
        totalNumberOfUsers: 'admin/totalNumberOfUsers'
      }),
      ...mapState({
        indexDetail: state => state.admin.indexDetail
      })
    },
    mounted () {
      this.getIndexPageDetail()
    },
    methods: {
      ...mapActions({
        getIndexPageDetail: 'admin/getIndexPageDetail'
      })
    }
  }
</script>

<style scoped>

</style>
