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
import { Component, Vue, Prop} from 'vue-property-decorator';
import formContent from '../components/forms/formContent.vue'

@Component({
  components:{
    formContent
  }
})

export default class Signup extends Vue{
  public btnText:string = "登録"
  public title:string = "会員情報登録"
  public googleText:string = "Googleで登録する"
  public checkText:string = "登録はお済みですか？"
  public linkText:string = "ログイン"
  public link:string = "/login"
}
</script>