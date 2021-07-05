<template>
  <div class="register">
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto fill-width"
      flat
      max-width="640"
    >
      <v-card-title class="text-center pa-8">
        <h4 class="fill-width">{{title}}</h4>
      </v-card-title>
      <v-divider> </v-divider>
      <div class="px-6 py-8" id="form">
        <div style="max-width:344px" class="mx-auto">
          <div>
            <v-btn
              class="fill-width text-capitalize caption"
              height="48px"
              outlined
              style="border-color:#979797;"
              tile
            >
              <img
                class="button-logo-img mr-4"
                src="https://madeby.google.com/static/images/google_g_logo.svg"
                style="height:24px;"
              />
              {{googleText}}
            </v-btn>
          </div>
          <div class="separator separator_login_page">
            <div class="middle_separator">または</div>
          </div>
          <div class="pt-6">
            <div>
              <v-text-field
                v-model="email"
                autofocus
                dense
                height="48px"
                outlined
                placeholder="メールアドレス"
              ></v-text-field>

              <v-text-field
                dense
                height="48px"
                name="input-password"
                outlined
                placeholder="パスワード"
                @click:append="passwordShow = !passwordShow"
              ></v-text-field>
            </div>
            <div class="login-btn pb-8">
              <v-btn
                class="fill-width caption"
                color="#FFCB00"
                depressed
                height="48px"
                tile
              >
                <strong id="regiBtn">{{btnText}}</strong>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="pt-8 pb-4 text-center">
              <span>{{checkText}}</span>
              <nuxt-link :to="link">{{linkText}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class formContent extends Vue{
  @Prop() public btnText:string
  @Prop() public title:string
  @Prop() public googleText:string 
  @Prop() public checkText:string
  @Prop() public linkText:string
  @Prop() public link:string
}
</script>

<style scoped>
#regiBtn{
  font-size: 16px;
}
.register{
  margin-top:30px;
}
/* #form{
 margin-top: 50px;
} */
.fill-width {
  width: 100%;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: .75rem;
}
.separator {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  position: relative;
}
.middle_separator {
  position: absolute;
  padding: 0 16px;
  color: #ccc;
  background: #fff;
  font-size: 11px;
  text-shadow: 0 1px 0 #fff;
  text-transform: uppercase;
  top: -7px;
  left: 30%;
}
.middle_separator {
  color: #777;
  font-size: 13px;
  top: -9px;
  left: 41%;
}

</style>