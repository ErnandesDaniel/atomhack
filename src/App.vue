<script>


 import errorMessage from '@/common/components/errorMessage.vue';

export default{


	components:{

		errorMessage

	}

}

</script>

<template>

  <router-view/>
  
  <errorMessage/>
  
</template>



<style scoped>

</style>
