<template>
  <formContent 
  :btnText="btnText"
  :title = "title"
  :googleText = "googleText"
  :checkText = "checkText"
  :linkText ="linkText"
  :link = "link"
  />
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import formContent from '../components/forms/formContent.vue'

@Component({
  components:{
    formContent
  }
})

export default class Signup extends Vue{
  public btnText:string = "ログイン"
  public title:string = "ログインフォーム"
  public googleText:string = "Googleでログイン"
  public checkText:string = "登録はお済みですか？"
  public linkText:string = "サインアップ"
  public link:string = "/signup"
}
</script>